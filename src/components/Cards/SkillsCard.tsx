import React from 'react';
import { BentoItem } from '../Layout/BentoItem';
import { FaCode } from 'react-icons/fa';
import SkillsMarquee from './SkillsMarquee';

const SkillsCard: React.FC = () => {
    return (
        <BentoItem colSpan={2} rowSpan={1} className="flex flex-col justify-center overflow-hidden relative">
            <div className="flex items-center gap-2 mb-4 px-4 z-20">
                <FaCode size={24} className="text-white" />
                <h3 className="text-xl font-bold text-white">Tech Stack</h3>
            </div>

            <div className="w-full">
                <SkillsMarquee />
            </div>
        </BentoItem>
    );
};

export default SkillsCard;
