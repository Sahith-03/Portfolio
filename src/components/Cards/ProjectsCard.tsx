import React, { useState, useEffect } from 'react';
import { BentoItem } from '../Layout/BentoItem';
import { fetchGithubProjects, projectsData } from '../../data/projects';
import type { Project } from '../../data/projects';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsCard: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>(projectsData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProjects = async () => {
            const data = await fetchGithubProjects('project');
            setProjects(data);
            setLoading(false);
        };
        getProjects();
    }, []);

    return (
        <>
            <BentoItem colSpan={4} rowSpan={1} className="md:col-span-4 flex justify-between items-center">
                <h2 className="text-3xl font-bold text-white">Projects</h2>
                {loading && <span className="text-sm text-gray-400">Loading GitHub projects...</span>}
            </BentoItem>
            {projects.map((project, index) => (
                <BentoItem
                    key={project.id}
                    colSpan={1}
                    rowSpan={1}
                    className="flex flex-col justify-between group cursor-pointer"
                    whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <div onClick={() => window.open(project.url, '_blank')} className="h-full flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="w-10 h-10" />
                            ) : (
                                <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center text-xl font-bold text-gray-500">
                                    {project.title.charAt(0)}
                                </div>
                            )}
                            <FaExternalLinkAlt className="text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex flex-col flex-grow justify-end mt-4">
                            <h3 className="font-bold text-lg mb-1 text-white">{project.title}</h3>
                            <p className="text-xs text-blue-400 font-semibold mb-2">Built with {project.tech}</p>
                            <p className="text-sm text-gray-300 line-clamp-3" title={project.description}>{project.description}</p>
                        </div>
                    </div>
                </BentoItem>
            ))}
        </>
    );
};

export default ProjectsCard;
