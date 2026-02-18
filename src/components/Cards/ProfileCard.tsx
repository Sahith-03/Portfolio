import React from 'react';
import { BentoItem } from '../Layout/BentoItem';
import Typewriter from './Typewriter';
import { motion } from 'framer-motion';

const ProfileCard: React.FC = () => {
    return (
        <BentoItem colSpan={2} rowSpan={1} className="relative overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            <div className="flex flex-col md:flex-row items-center gap-6 h-full relative z-10 p-2">
                {/* Profile Image with Glow */}
                <div className="relative group">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-lg"
                        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                    <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-white/20 relative z-10 shadow-2xl">
                        <img
                            src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                            alt="Krishna Sahith"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                </div>

                {/* Text Content */}
                <div className="text-center md:text-left flex-1">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
                            Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Sahith</span>
                        </h1>
                    </motion.div>

                    <div className="text-lg md:text-xl font-medium h-8 mb-4 flex justify-center md:justify-start items-center text-gray-200">
                        <span className="mr-2">I'm a</span>
                        <Typewriter />
                    </div>

                    <p className="text-gray-400 text-sm max-w-md mx-auto md:mx-0 leading-relaxed border-l-2 border-gray-700 pl-4 italic">
                        "Simplifying complex problems into elegant, user-friendly designs."
                    </p>
                </div>
            </div>
        </BentoItem>
    );
};

export default ProfileCard;
