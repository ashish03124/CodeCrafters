"use client"
import React, {useState} from 'react';
import Link from "next/link";
import {signIn} from "next-auth/react";
import {validateSignupForm} from "@/lib/utils";
import {client} from "@/sanity/lib/client";
import {USER_BY_EMAIL_QUERY} from "@/sanity/lib/query";

const SignUpCredential = () => {

    const [form, setForm] = useState({email: "", password: "", name: ""});
    const [error, setError] = useState({email: "", password: "", name: "", general: ""});
    console.log(error)
    const [loading, setLoading] = useState(false);
    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError({...error, general: ""});
        setLoading(true);
        const formData = {
            name: form.name,
            email: form.email,
            password: form.password
        };

        const errors = validateSignupForm(formData);

        if (Object.keys(errors).length > 0) {
            setError({
                email: errors.email as string,
                password: errors.password as string,
                name: errors.name as string,
                general: ""
            });
            setLoading(false);
            return;
        }

        const existingUser = await client.fetch(USER_BY_EMAIL_QUERY, {email: formData.email});
        if (existingUser) {
            setError({
                email: "Email already exists",
                password: "",
                name: "",
                general: ""
            });
            setLoading(false);
            return
        }

        await signIn("credentials",{
            name: formData.name,
            email: formData.email,
            password: formData.password,
            redirect: true,
            redirectTo: "/"
        })
        setLoading(false);
    };
    return (
        <form className="space-y-4 w-[33%]" onSubmit={handleSignup}>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 ">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-4 py-2 bg-gray-100  border border-gray-300  rounded-xl text-gray-800  focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Your Name (John Doe)"
                    required
                    value={form.name}
                    onChange={(e) => {
                        setForm({...form, name: e.target.value})
                        setError({...error, name: ""})
                    }}
                />
                {error && error.name?.length != 0 && <p style={{color: "red"}}>{error.name}</p>}
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 ">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-4 py-2 bg-gray-100  border border-gray-300  rounded-xl text-gray-800  focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your Email (you@example.com)"
                    required
                    value={form.email}
                    onChange={(e) => {
                        setForm({...form, email: e.target.value})
                        setError({...error, email: ""})
                    }}
                />
                {error && error.email?.length != 0 && <p style={{color: "red"}}>{error.email}</p>}

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
                    required
                    value={form.password}
                    onChange={(e) => {
                        setForm({...form, password: e.target.value})
                        setError({...error, password: ""})
                    }}
                />
                {error && error.password?.length != 0 && <p style={{color: "red"}}>{error.password}</p>}

            </div>
            <div>
                {error && error.general?.length != 0 && <p style={{color: "red"}}>{error.general}</p>}
            </div>

            <div className="flex justify-center items-center text-gray-500  mb-0.5">
                <Link href={"/login"}>
                    <span className="text-sm underline">Already have an account?, Login</span>
                </Link>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
            >
                {loading?"Creating Account":"Create Account"}
            </button>
        </form>
    );
};

export default SignUpCredential;
