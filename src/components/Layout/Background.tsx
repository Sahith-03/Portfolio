import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
    return (
        <div className="fixed inset-0 -z-10 h-full w-full bg-black overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* Radial Gradients - Silver/White */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_10%_20%,rgba(255,255,255,0.05),transparent)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_800px_at_90%_80%,rgba(255,255,255,0.05),transparent)]"></div>

            {/* Animated blobs - Monochrome/Silver */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-20 left-1/4 w-96 h-96 bg-gray-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 will-change-transform"
            />
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.5, 1],
                    rotate: [0, -60, 0]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 will-change-transform"
            />
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 100, 0],
                    scale: [1, 0.8, 1],
                    rotate: [0, 45, 0]
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-1/2 left-1/2 w-80 h-80 bg-zinc-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 will-change-transform"
            />
        </div>
    );
};

export default Background;
