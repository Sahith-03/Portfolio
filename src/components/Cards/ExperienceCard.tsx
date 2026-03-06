import React from 'react';
import { BentoItem } from '../Layout/BentoItem';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaLink } from 'react-icons/fa';

const ExperienceCard: React.FC = () => {
    return (
        <BentoItem colSpan={4} rowSpan={2} className="relative overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

            <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                        <FaBriefcase size={24} className="text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white font-syne">Professional Experience</h2>
                        <p className="text-sm text-gray-400">My journey in the industry</p>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-8">
                    {/* Axodian */}
                    <ExperienceItem
                        company="Axodian (formerly Leremitt - Trade Platform)"
                        role="Software Associate"
                        date="May 2025 – Present"
                        location="Bangalore, Karnataka"
                    />

                    {/* Cobuild.tech */}
                    <ExperienceItem
                        company="Cobuild.tech"
                        role="Full Stack Developer Intern"
                        date="December 2024 – April 2025"
                        location="Chennai, Tamil Nadu"

                    />

                    {/* Meister-Gen Technologies */}
                    <ExperienceItem
                        company="Meister-Gen Technologies"
                        role="Full Stack Developer Intern"
                        date="June 2024 – August 2024"
                        location="Chennai, Tamil Nadu"

                    />
                </div>
            </div>
        </BentoItem>
    );
};

interface ExperienceItemProps {
    company: string;
    role: string;
    date: string;
    location: string;
    link?: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ company, role, date, location, link }) => {
    return (
        <div className="group border-l-2 border-white/10 pl-6 relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-800 border-2 border-white/20 group-hover:border-white/60 group-hover:bg-white transition-all duration-300"></div>

            <div className="mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                    {company}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-gray-400">
                    <span className="font-semibold text-gray-300">{role}</span>
                    <span className="flex items-center gap-1"><FaCalendarAlt size={12} /> {date}</span>
                    <span className="flex items-center gap-1"><FaMapMarkerAlt size={12} /> {location}</span>
                </div>
            </div>


            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-xs text-gray-400 hover:text-white transition-colors border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/5"
                >
                    <FaLink size={10} /> Reference Link
                </a>
            )}
        </div>
    );
};

export default ExperienceCard;
