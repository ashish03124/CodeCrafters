"use client"
import React, {useState} from 'react';
import Link from "next/link";
import {client} from "@/sanity/lib/client";
import {USER_BY_EMAIL_QUERY} from "@/sanity/lib/query";
import {compareSync} from "bcryptjs";
import {signIn} from "next-auth/react";

const LoginCredential = () => {
    const [form, setForm] = useState({email: "", password: ""});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        const existingUser = await client.fetch(USER_BY_EMAIL_QUERY, {email: form.email});
        if(!existingUser) {
            setError("Account with this Email doesn't exists");
            setLoading(false);
            return;
        }
        const isPasswordCorrect = compareSync(form.password, existingUser.password as string);
        if(!isPasswordCorrect) {
            setError("Incorrect Password");
        }else {
            await signIn("credentials",{
                email: form.email,
                password: form.password,
                redirect: true,
                redirectTo: "/"
            })
        }
        setLoading(false);
    }
    return (
        <form className="space-y-4 w-[33%]" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 ">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-4 py-2 bg-gray-100  border border-gray-300  rounded-xl text-gray-800  focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                    onChange={(e)=> {
                        setForm({...form, email: e.target.value})
                        setError("")
                    }}
                    value={form.email}
                    required
                />
            </div>

            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 ">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    className="mt-1 block w-full px-4 py-2 bg-gray-100  border border-gray-300  rounded-xl text-gray-800  focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••••••"
                    onChange={(e)=> {
                        setForm({...form, password: e.target.value})
                        setError("")
                    }}
                    value={form.password}
                    required
                />
            </div>
            <div className={"text-center"}>
                {error && error?.length != 0 && <p style={{color: "red"}}>{error}</p>}
            </div>
            <div className="flex justify-center items-center text-gray-500  mb-0.5">
                <Link href={"/signup"}>
                    <span className="text-sm underline">New here?, Sign up</span>
                </Link>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
            >
                {loading?"Logging In":"Login"}
            </button>
        </form>
    );
};

export default LoginCredential;
