import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJs, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaLinux, FaDatabase, FaCode, FaCuttlefish } from 'react-icons/fa';

const skills = [
    { name: "C", icon: FaCuttlefish, color: "#A8B9CC" }, // FaCuttlefish matches C sort of
    { name: "C++", icon: FaCode, color: "#00599C" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "TypeScript", text: "TS", color: "#3178C6" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", text: "Next", color: "#ffffff" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express", text: "EX", color: "#ffffff" },
    { name: "Redux", text: "Redux", color: "#764ABC" },
    { name: "MySQL", icon: FaDatabase, color: "#4479A1" },
    { name: "MongoDB", icon: FaDatabase, color: "#47A248" },
    { name: "Prisma", text: "Prisma", color: "#2D3748" },
    { name: "Jest", text: "Jest", color: "#C21325" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Linux", icon: FaLinux, color: "#FCC624" },
];

const SkillsMarquee: React.FC = () => {
    const midPoint = Math.ceil(skills.length / 2);
    const row1 = skills.slice(0, midPoint);
    const row2 = skills.slice(midPoint);

    return (
        <div className="relative flex flex-col gap-4 overflow-hidden py-4 -mx-6 will-change-transform">
            {/* Row 1: Left Scroll */}
            <motion.div
                className="flex gap-4 whitespace-nowrap px-4"
                animate={{ x: [0, -1035] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 40
                }}
            >
                {[...row1, ...row1, ...row1, ...row1].map((skill, index) => (
                    <SkillCard key={`row1-${index}`} skill={skill} />
                ))}
            </motion.div>

            {/* Row 2: Right Scroll */}
            <motion.div
                className="flex gap-4 whitespace-nowrap px-4"
                animate={{ x: [-1035, 0] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 40
                }}
            >
                {[...row2, ...row2, ...row2, ...row2].map((skill, index) => (
                    <SkillCard key={`row2-${index}`} skill={skill} />
                ))}
            </motion.div>
        </div>
    );
};

const SkillCard: React.FC<{ skill: typeof skills[0] }> = ({ skill }) => (
    <div
        className="relative group w-28 h-28 shrink-0 flex flex-col items-center justify-center gap-3 bg-transparent border border-transparent hover:border-white/10 rounded-2xl transition-all duration-500 hover:bg-white/5 hover:-translate-y-2 cursor-pointer"
        style={{
            // Start with subtle border, change to brand color on hover
        }}
    >
        {/* Glow effect on hover */}
        <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
                boxShadow: `0 0 20px ${skill.color}40`,
                border: `1px solid ${skill.color}80`
            }}
        />

        <div
            className="text-4xl transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
            style={{ color: skill.color }}
        >
            {skill.icon ? (
                <skill.icon />
            ) : (
                <span className="font-bold text-lg font-mono">{skill.text}</span>
            )}
        </div>

        <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400 group-hover:text-white transition-colors z-10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
            {skill.name}
        </span>
    </div>
);

export default SkillsMarquee;
