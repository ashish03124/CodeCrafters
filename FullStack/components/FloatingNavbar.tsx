"use client";
import React, {useEffect, useLayoutEffect, useState} from "react";
import Image from "next/image";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import {useTheme} from "next-themes";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import {LaptopMinimal, Moon, Sun, User} from "lucide-react";
import Link from "next/link";
import {Session} from "@/sanity/schemaTypes/manualTypes";
import {signOut} from "next-auth/react";


export const FloatingNavbar = ({
                                className,session
                            }: {
    className?: string;
    session: Session

}) => {
    const { scrollYProgress } = useScroll();
    const {theme, resolvedTheme,setTheme} = useTheme();
    const [signOutClicked, setSignOutClicked] = useState(false);
    const [currTheme, setCurrTheme] = useState<string>();
    const [currResolvedTheme, setCurrResolvedTheme] = useState<string>();
    useLayoutEffect(() => {
        setCurrResolvedTheme(resolvedTheme)
        setCurrTheme(theme)
        console.log(session)
    },[])


    // useEffect(() => {
    //     const handleSignOut =  async () => {
    //         "use server"
    //         await signOut({redirectTo: "/"})
    //     }
    //     if(signOutClicked){
    //         handleSignOut()
    //     }
    //
    // }, [signOutClicked]);
    useLayoutEffect(() => {
        setCurrResolvedTheme(resolvedTheme)
        setCurrTheme(theme)
    },[theme])
    console.log(resolvedTheme)

    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.1) {
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -200,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.6,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className={cn(
                    `flex max-w-[75vw] text-text-primary fixed top-10 inset-x-0 mx-auto glass-navbar-${currResolvedTheme}  rounded-full  pr-3 pl-8 py-3  items-center justify-between space-x-4`,
                    className
                )}
            >
                {/*Logo*/}
                <div>
                    <h2>Career Guider</h2>
                </div>

                {/*Navs*/}
                <div className={" flex gap-4"}>
                    <Link href={"/"}>
                        Home
                    </Link>

                    <Link href={"/"}>
                        Explore
                    </Link>

                    <Link href={"/articles"}>
                        Articles
                    </Link>
                    <Link href={"/about-us"}>
                        About Us
                    </Link>
                </div>

                {/*Utilities*/}
                <div className={"flex gap-5"}>





                    <div>
                        {session && session?.user ? (
                            <div className={"flex justify-between items-center gap-5"}>
                                    <button className={"cursor-pointer flex justify-center items-center"} onClick={()=>{
                                        signOut({redirectTo: "/"})
                                    }}>
                                        <span className={"max-sm:hidden"}>Logout</span>
                                    </button>

                                <div>
                                    {session?.user?.image ? (<img alt={"User Logo"} src={session?.user?.image as string || ""}
                                                                    className={` w-[2.75rem] h-[2.75rem] bg-transparent cursor-pointer border border-border rounded-full`}/>):
                                        (<div className={"rounded-full w-[2.75rem] h-[2.75rem] border border-border cursor-pointer flex justify-center items-center"}>
                                            <User />
                                        </div>)
                                    }

                                    {/*<div className={"flex-col justify-between"}>*/}
                                    {/*    <p className={"text-black font-medium "}>{session?.user?.name}</p>*/}
                                    {/*    <p className={"text-gray-500 text-sm font-extralight"}>{session?.user?.email}</p>*/}
                                    {/*</div>*/}
                                </div>
                            </div>

                        ) : (
                            <Link href={"/login"} className="cursor-pointer h-[2.75rem] flex justify-center items-center">
                                <span>Login</span>
                            </Link>                        )}
                    </div>
                    <ToggleGroup  type={"single"} className={"bg-transparent border border-border rounded-full"} aria-label={"Theme Toggle"} value={currTheme}>
                        <ToggleGroupItem className={"cursor-pointer"} value={"light"} onClick={() => {setTheme("light")}}>
                            <Sun className={`h-[1.2rem] w-[1.2rem] sun glow-child rotate-0 transition-all `} />
                        </ToggleGroupItem>
                        <ToggleGroupItem value={"system"} className={"cursor-pointer"} onClick={() => {setTheme("system")}}>
                            <LaptopMinimal className={"glow-child"} />
                        </ToggleGroupItem>
                        <ToggleGroupItem className={"cursor-pointer"} value={"dark"} onClick={() => {setTheme("dark")}}>
                            <Moon className={"absolute moon glow-child h-[1.2rem] w-[1.2rem] transition-all duration-300"} />
                        </ToggleGroupItem>
                    </ToggleGroup>

                </div>

            </motion.div>
        </AnimatePresence>
    );
};
