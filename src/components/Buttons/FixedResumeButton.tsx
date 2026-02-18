import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FixedResumeButton: React.FC = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex overflow-hidden rounded-full p-[2px]"
            >
                {/* Spinning Gradient Border */}
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#60A5FA_0%,#2563EB_50%,#60A5FA_100%)] will-change-transform" />

                {/* Glow Effect */}
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#60A5FA_0%,#2563EB_50%,#60A5FA_100%)] blur-md opacity-50 will-change-transform" />

                {/* Button Content */}
                <a
                    href="/Krishna_Sahith_Resume (3).pdf"
                    download="Krishna_Sahith_Resume.pdf"
                    className="inline-flex h-full w-full cursor-pointer items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-colors hover:bg-slate-900 group"
                >
                    <motion.span
                        animate={{ y: [0, -2, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                        <FaDownload />
                    </motion.span>
                    <span>Resume</span>
                </a>
            </motion.div>
        </div>
    );
};

export default FixedResumeButton;
