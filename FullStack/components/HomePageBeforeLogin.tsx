import React from 'react';
import {motion} from "motion/react";

import Title from "@/components/HomePageBeforeLogin_Components/Title";
import {BackgroundLines} from "@/components/ui/background-lines";

const HomePageBeforeLogin = () => {
    return (
        <div className={"w-[100%] h-[150vh]"}>

            {/* Hero Section*/}
            <BackgroundLines className={"flex max-h-[90vh]"}>
                <div className={"flex flex-col w-[40%] justify-center items-start"}>
                    <Title/>
                    <motion.p className={"text-text-secondary pl-1 pt-5"}
                              initial={{
                                  opacity: 0,
                                  y: 20,
                              }}
                              animate={{
                                  opacity: 1,
                                  y: [20, -5, 0],
                              }}
                              transition={{
                                  duration: 1,
                                  delay: 0.2,
                                  ease: [0.4, 0.0, 0.2, 1],
                              }}>

                        Get AI-powered career guidance that brings clarity
                        after 10th and 12th — helping you
                        choose the right stream, explore top universities, and step confidently into your future.

                    </motion.p>
                    <motion.button
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className={"mt-5 px-5 py-3 rounded-xl glass-accent-secondary cursor-pointer hover:scale-105 hover:duration-300 hover:ease-in-out text-white"}>
                        Get Guidance Today
                    </motion.button>
                </div>
                <div className={"flex flex-col w-[60%] h-[90vh] relative"}>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.4,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className={"p-3 w-fit bg-surface glass-bg-bulb-logo rounded-lg rotate-[-30deg] absolute left-[62%] top-[7%] z-30"}>
                        <img src={"/bulb-logo.png"} className={"w-[3vw] h-[3vw] drop-shadow-img"}/>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className={"p-3 w-fit bg-surface glass-bg-education-logo rounded-lg rotate-[10deg] absolute left-[20%] bottom-[7%] z-30"}>
                        <img src={"/education-logo.png"} className={"w-[8vw] drop-shadow-img"}/>
                    </motion.div>
                    <motion.img
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 1,
                            delay: 0,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        src={"/homepage_cartoon.png"} alt={"Happy Person"} className={" w-full h-full z-20 drop-shadow-cartoon"} />
                </div>
            </BackgroundLines>
        </div>
    );
};

export default HomePageBeforeLogin;
