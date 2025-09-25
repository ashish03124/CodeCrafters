import React from 'react';
import { motion } from "motion/react";
import {HeroHighlight, Highlight} from "@/components/ui/hero-highlight";


const Title = () => {
    return (
        <HeroHighlight>
            <motion.h1
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
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl w-fit md:text-4xl lg:text-6xl font-bold text-text-primary max-w-4xl leading-relaxed lg:leading-snug text-center"
            >
                Know Your<span>{" "}</span>
                <Highlight delay={0.2} className="text-text-primary-inverse">
                    Path
                </Highlight>
                ,
                <br/>
                Own Your<span>{" "}</span>
                <Highlight delay={0.4} className="text-text-primary-inverse">
                    Future
                </Highlight>
            </motion.h1>
        </HeroHighlight>
    );
};

export default Title;
