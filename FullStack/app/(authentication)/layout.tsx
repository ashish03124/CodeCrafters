"use client";

import {motion} from "framer-motion";
import {cn} from "@/lib/utils"; // Assuming you have this utility
import React from "react";
import {LucideHome} from "lucide-react";

export default function Layout({
                                   children,
                               }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen relative overflow-hidden">
            {/* Gradient background */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-[#f1f6fa] via-[#d5e6f4] to-[#cfdcf0]"/>

            {/* Orb container (left 50%) */}
            <div className="absolute inset-y-0 left-0 w-[50%] overflow-hidden">
                {/* Blue orb - Advanced infinity loop with spiral elements */}
                <motion.div
                    className="absolute top-10 left-12 w-[200px] h-[200px] rounded-full bg-blue-400/25 blur-md"
                    animate={{
                        x: [
                            0, 60, 140, 180, 200, 180, 140, 100, 60, 20, -20, -60,
                            -100, -120, -100, -60, -20, 20, 60, 100, 140, 160, 120, 80, 40, 0
                        ],
                        y: [
                            0, -40, -80, -60, -20, 20, 60, 100, 120, 100, 60, 20,
                            -20, -60, -100, -120, -100, -60, -20, 20, 60, 80, 60, 40, 20, 0
                        ],
                        scale: [
                            1, 1.1, 0.8, 1.3, 0.9, 1.2, 0.7, 1.4, 0.85, 1.15, 0.75, 1.25,
                            0.95, 1.05, 0.8, 1.3, 0.9, 1.1, 0.85, 1.2, 0.75, 1.35, 0.9, 1.1, 0.95, 1
                        ],
                        rotate: [
                            0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330,
                            360, 390, 420, 450, 480, 510, 540, 570, 600, 630, 660, 690, 720, 720
                        ],
                    }}
                    transition={{
                        duration: 200,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                />

                {/* Purple orb - Complex lemniscate (figure-8) with 3D-like movement */}
                <motion.div
                    className="absolute top-1/3 left-64 w-[220px] h-[220px] rounded-full bg-purple-400/25 blur-md"
                    animate={{
                        x: [
                            80, 120, 160, 200, 220, 200, 160, 120, 80, 40, 0, -40,
                            -80, -100, -80, -40, 0, 40, 80, 120, 160, 180, 160, 120, 100, 80
                        ],
                        y: [
                            60, 20, -20, -60, -40, 0, 40, 80, 120, 140, 120, 80,
                            40, 0, -40, -80, -120, -140, -120, -80, -40, 0, 40, 60, 60, 60
                        ],
                        scale: [
                            1, 0.7, 1.4, 0.6, 1.5, 0.8, 1.2, 0.5, 1.6, 0.9, 1.1, 0.4,
                            1.7, 0.75, 1.3, 0.65, 1.45, 0.55, 1.35, 0.85, 1.15, 0.95, 1.25, 0.7, 1.4, 1
                        ],
                        rotate: [
                            0, -45, -90, -135, -180, -225, -270, -315, -360, -405, -450, -495,
                            -540, -585, -630, -675, -720, -765, -810, -855, -900, -945, -990, -1035, -1080, -1080
                        ],
                        rotateX: [0, 15, 30, 45, 30, 15, 0, -15, -30, -45, -30, -15, 0, 15, 30, 45, 30, 15, 0, -15, -30, -45, -30, -15, 0, 0],
                        rotateY: [0, 20, 40, 60, 40, 20, 0, -20, -40, -60, -40, -20, 0, 20, 40, 60, 40, 20, 0, -20, -40, -60, -40, -20, 0, 0],
                    }}
                    transition={{
                        duration: 150,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                />

                {/* Green orb - Chaotic butterfly pattern with sinusoidal waves */}
                <motion.div
                    className="absolute bottom-16 left-16 w-[180px] h-[180px] rounded-full bg-emerald-400/25 blur-md"
                    animate={{
                        x: [
                            -70, -40, -10, 20, 50, 80, 110, 140, 160, 140, 110, 80,
                            50, 20, -10, -40, -70, -100, -130, -150, -130, -100, -70, -40, -10, 20, 50, -70
                        ],
                        y: [
                            50, 30, 10, -10, -30, -20, 0, 30, 60, 90, 110, 90,
                            60, 30, 0, -20, -30, -10, 10, 30, 50, 70, 80, 70, 50, 30, 10, 50
                        ],
                        scale: [
                            1, 1.3, 0.6, 1.6, 0.4, 1.8, 0.5, 1.5, 0.7, 1.2, 0.8, 1.4,
                            0.6, 1.7, 0.3, 1.9, 0.45, 1.55, 0.65, 1.35, 0.75, 1.25, 0.85, 1.15, 0.95, 1.05, 0.9, 1
                        ],
                        rotate: [
                            0, 60, 120, 180, 240, 300, 360, 420, 480, 540, 600, 660,
                            720, 780, 840, 900, 960, 1020, 1080, 1140, 1200, 1260, 1320, 1380, 1440, 1500, 1560, 1620
                        ],
                        skewX: [0, 10, -10, 15, -15, 20, -20, 10, -10, 5, -5, 0, 10, -10, 15, -15, 20, -20, 10, -10, 5, -5, 0, 10, -10, 5, -5, 0],
                        skewY: [0, -5, 5, -10, 10, -15, 15, -10, 10, -5, 5, 0, -5, 5, -10, 10, -15, 15, -10, 10, -5, 5, 0, -5, 5, -3, 3, 0],
                    }}
                    transition={{
                        duration: 250,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Main content layout */}
            <div className="relative flex min-h-screen gap-3 w-full">
                {/* Left dynamic section */}
                <div className="w-[35%] ml-[1vh] my-auto h-[98vh] relative z-10">
                    <div className="w-full flex flex-col justify-center h-[100%]">
                        {children}
                    </div>
                </div>

                {/* Right static section with grid background */}
                <div
                    className="hidden lg:flex w-[65%] mr-[1vh] rounded-xl h-[98vh] rounded-bl-[5rem] items-center my-auto justify-center relative z-20 overflow-hidden">
                    {/* Background with same color as your layout */}
                    <div className="absolute inset-0 bg-[#111827]"/>

                    {/* Grid pattern overlay */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundSize: '80px 80px',
                            backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 39px,
                  #1F2937 39px,
                  #1F2937 41px
                ),
                repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 39px,
                  #1F2937 39px,
                  #1F2937 41px
                )
              `,
                        }}
                    />

                    {/* Radial gradient mask for faded look */}
                    <div
                        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#111827] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_80%)]"></div>

                    {/* Content */}
                    <div className="text-center px-6 relative z-10">
                        <h2 className="text-white text-2xl font-semibold mb-4">
                            Career Guider
                        </h2>
                        <p className="text-gray-400">
                            Get Career Guidance Clarity from AI after 10th and 12th — helping you
                            choose the right stream, explore top universities, and step confidently into your future.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
