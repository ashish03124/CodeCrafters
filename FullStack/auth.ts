import NextAuth, {User} from "next-auth"
import Google from "@auth/core/providers/google";
import {client} from "@/sanity/lib/client";
import {USER_BY_EMAIL_QUERY, USER_BY_AUTH_ID_QUERY} from "@/sanity/lib/query";
import {writeClient} from "@/sanity/lib/writeClient";
import {JWT, Session} from "@/sanity/schemaTypes/manualTypes.js";
import Credentials from "@auth/core/providers/credentials";
import {compareSync, hashSync} from "bcryptjs";

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [Google,
        Credentials({
            credentials: {
                name: {label: "Name", type: "text", placeholder: "Enter your name",optional: true},
                email: {label: "Email", type: "text", placeholder: "Enter your email"},
                password: {label: "Password", type: "password", placeholder: "Enter your password"}
            },
            authorize: async (credentials) => {
                const existingUser = await client.fetch(USER_BY_EMAIL_QUERY,{email: credentials.email})
                if(credentials.name){
                    //sign up
                    if(!existingUser){

                        // new user
                        const randomId = crypto.randomUUID() as string
                        await writeClient.create({
                            _type: "user-final",
                            id: randomId,
                            name: credentials.name,
                            username: (credentials?.email as string).split('@')[0],
                            email: credentials?.email,
                            image: null,
                            password: hashSync(credentials.password as string),
                            login_method: "credentials",
                        })
                        return {
                            id: randomId,
                            name: credentials.name,
                            email: credentials.email,
                            image: null,
                        } as User
                    }else{
                        // existing user
                        return null
                    }
                }else{
                    // login
                    if(!existingUser){
                        return null
                    }else{
                        const passwordCheck = compareSync(credentials.password as string, existingUser.password as string)
                        if(passwordCheck){
                            return {
                                id: existingUser.id,
                                name: existingUser.name,
                                email: existingUser.email,
                                image: existingUser.image,
                            } as User
                        }else{
                            return null;
                        }
                    }
                }
            }
        })
    ],

    callbacks: {
        async signIn({user, profile, account}) {
            if(!user){
                return false;
            }

            if(account && account.provider === "credentials"){
                return true;
            }
            const existingUser = await client.fetch(USER_BY_AUTH_ID_QUERY, {id: profile?.sub})
            if (!existingUser) {
                await writeClient.create({
                    _type: "user-final",
                    id: profile?.sub,
                    name: user?.name,
                    username: user?.email?.split('@')[0],
                    email: user?.email,
                    image: user?.image,
                    login_method: "google",
                })
            }

            return true
        },

        async jwt ({token,account,profile,user}) : Promise<JWT>{
            let updatedToken = token as JWT
            if(account && account.provider === "credentials"){
                const userObtained = await client.fetch(USER_BY_AUTH_ID_QUERY,{id: user?.id as string})
                updatedToken = {...token,id: userObtained?._id} as JWT
            }
            if(account && profile){
                const userObtained = await client.fetch(USER_BY_AUTH_ID_QUERY,{id: profile?.sub})
                updatedToken = {...token,id: userObtained?._id} as JWT
            }
            return updatedToken
        },

        async session({session, token}): Promise<Session> {
            return {
                ...session, id: token.id as string
            }
        },
    }
})

