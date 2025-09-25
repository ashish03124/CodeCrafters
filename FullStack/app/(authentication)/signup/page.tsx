import React from 'react';
import {signIn} from "@/auth";
import SignUpCredential from "@/components/SignUpCredential";
import {LucideHome} from "lucide-react";
import Link from "next/link";

const SignUpPage = () => {
    return  (
            <div className="w-[99vw] flex flex-col justify-center glass-login-signup h-full rounded-2xl shadow-lg p-8 space-y-6">
                <Link href={"/"}  className={"top-6 absolute left-6 p-2 glass-navbar-light  glass-bg-home-logo rounded-full cursor-pointer"}>
                    <LucideHome/>
                </Link>
                <h2 className="text-2xl w-[33%] font-bold text-center text-gray-800 ">Create an Account</h2>

                <SignUpCredential/>

                <div className="flex w-[33%] items-center gap-2 text-gray-500 ">
                    <div className="flex-grow h-px bg-gray-300 "></div>
                    <span className="text-sm">or</span>
                    <div className="flex-grow h-px bg-gray-300 "></div>
                </div>

                <form action={async () => {
                    "use server"
                    await signIn("google",{
                        redirect: true,
                        redirectTo: "/"
                    })
                }}>
                    <div className={"flex hover:scale-105 justify-center w-[33%]"}>
                        <button
                            type="submit"
                            className="p-2 glass-navbar-light  glass-bg-home-logo rounded-full cursor-pointer"
                        >
                            <img src="/google.png" alt="Google" className="w-5 h-5" />
                        </button>
                    </div>
                </form>
            </div>
    );
};

export default SignUpPage;
