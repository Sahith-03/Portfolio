import React from 'react';
import { BentoItem } from '../Layout/BentoItem';
import { FaGraduationCap } from 'react-icons/fa';

const EducationCard: React.FC = () => {
    return (
        <BentoItem colSpan={1} rowSpan={1} className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
                <FaGraduationCap size={24} className="text-white" />
                <h3 className="text-lg font-bold text-white">Education</h3>
            </div>
            <div className="space-y-4">
                <div>
                    <p className="font-bold text-sm text-gray-200">IIITDM Kancheepuram</p>
                    <p className="text-xs text-gray-400">B.Tech (2021-2025)</p>
                </div>
                <div>
                    <p className="font-bold text-sm text-gray-200">Narayana Jr College</p>
                    <p className="text-xs text-gray-400">Intermediate (2019-2021)</p>
                </div>
                <div>
                    <p className="font-bold text-sm text-gray-200">Sri Chaitanya</p>
                    <p className="text-xs text-gray-400">School (2018-2019)</p>
                </div>
            </div>
        </BentoItem>
    );
};

export default EducationCard;
