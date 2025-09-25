import React from 'react';
import {FloatingNavbar} from "@/components/FloatingNavbar";
import {auth, signOut} from "@/auth";
import {Session} from "@/sanity/schemaTypes/manualTypes";

const Navbar = async() => {
    const session = await auth() as Session
    return (
        <div>
            <FloatingNavbar  session={session} />
        </div>
    );
};

export default Navbar;
