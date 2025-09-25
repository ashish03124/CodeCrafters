import {DefaultSession} from "next-auth";
import {DefaultJWT} from "@auth/core/jwt";

export interface Session extends DefaultSession {
    id: string;
}

export interface JWT extends DefaultJWT {
    id: string;
}