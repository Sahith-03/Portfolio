import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const roles = [
    "Full Stack Developer",
    "Data Analyst",
    "UI/UX Enthusiast",
];

const Typewriter: React.FC = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        const typeSpeed = isDeleting ? 50 : 100;

        const timer = setTimeout(() => {
            if (!isDeleting && displayText === currentRole) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            } else {
                const nextText = isDeleting
                    ? currentRole.substring(0, displayText.length - 1)
                    : currentRole.substring(0, displayText.length + 1);
                setDisplayText(nextText);
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRoleIndex]);

    return (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-bold">
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="ml-1 text-white"
            >
                |
            </motion.span>
        </span>
    );
};

export default Typewriter;
