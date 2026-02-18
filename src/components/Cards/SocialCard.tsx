import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { BentoItem } from '../Layout/BentoItem';
import { motion, AnimatePresence } from 'framer-motion';

const SocialCard: React.FC = () => {
    return (
        <BentoItem colSpan={1} rowSpan={1} className="flex flex-col p-4">
            <h3 className="text-xl font-bold mb-2 text-white">Connect</h3>

            <div className="flex-1 w-full h-full flex flex-col gap-2 min-h-[140px]">
                <div className="flex-1 flex gap-2">
                    <SocialLink
                        href="https://linkedin.com/in/krishna-sahith-a2b69b261"
                        icon={<FaLinkedin size={24} />}
                        color="#0077b5"
                        label="LinkedIn"
                    />
                    <SocialLink
                        href="https://github.com/Sahith-03"
                        icon={<FaGithub size={24} />}
                        color="#171515"
                        label="GitHub"
                        textColor="text-white"
                    />
                </div>
                <div className="flex-1 flex gap-2">
                    <SocialLink
                        href="https://instagram.com/krishh_003"
                        icon={<FaInstagram size={24} />}
                        color="#E1306C"
                        label="Instagram"
                    />
                    <SocialLink
                        href="https://leetcode.com/u/sahithhh/"
                        icon={<SiLeetcode size={24} />}
                        color="#FFA116"
                        label="LeetCode"
                    />
                </div>
            </div>
        </BentoItem>
    );
};

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
    color: string;
    label: string;
    textColor?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, color, label, textColor = "text-white" }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center relative overflow-hidden rounded-xl bg-white/5 border border-white/10"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={{
                flex: isHovered ? 2 : 1,
                backgroundColor: isHovered ? color : 'rgba(255, 255, 255, 0.05)',
            }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                animate={{
                    scale: isHovered ? 1.1 : 1,
                    y: isHovered ? -5 : 0
                }}
                className={isHovered ? textColor : "text-gray-300"}
            >
                {icon}
            </motion.div>

            <AnimatePresence>
                {isHovered && (
                    <motion.span
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className={`absolute bottom-2 text-xs font-bold ${textColor}`}
                    >
                        {label}
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.a>
    );
};

export default SocialCard;
