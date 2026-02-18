import React from 'react';
import { BentoItem } from '../Layout/BentoItem';

const AboutCard: React.FC = () => {
    return (
        <BentoItem colSpan={2} rowSpan={1}>
            <h3 className="text-xl font-bold mb-2 text-white">About Me</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
                DevOps enthusiast and aspiring software engineer passionate about building innovative solutions.
                Graduated with a Bachelor of Technology in Computer Science and Engineering from IIITDM Kancheepuram.
                <br /><br />
                <span className="font-semibold text-white">Core Skills:</span> Proficient in Data Structures and Algorithms, Object-Oriented Programming, Databases, Operating Systems, and Computer Networks.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-gray-200">
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">📧 Email:</span> krishnasahith.bonagiri@gmail.com
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">📞 Contact:</span> +91 7815838391
                </div>
            </div>
        </BentoItem>
    );
};

export default AboutCard;
