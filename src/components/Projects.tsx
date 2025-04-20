// src/components/Projects.tsx
import React from 'react';

type ProjectType = {
  nameProjet: string;
  technology: string[];
  descriptionProject: string;
  linkProject: string;
  owner: 'yes' | 'no';
};

type Props = {
  projects: ProjectType[];
};

const Projects = ({ projects }: Props) => (
  <section id="projetos" className="bg-neutral-900 text-lime-400 px-8 py-12 max-w-4xl mx-auto rounded-md shadow-md mt-10">
    <h3 className="text-3xl font-header text-center mb-8">Projetos</h3>
    <div className="space-y-6">
      {projects.map((project, index) => (
        <div key={index} className="border border-lime-400 rounded-md p-4 bg-neutral-800">
          <h4 className="text-2xl font-bold text-white">{project.nameProjet}</h4>
          <p className="text-lime-300 mb-2">{project.descriptionProject}</p>
          <p className="text-sm text-gray-300 font-mono bg-gray-800 px-2 py-1 rounded">
            {project.technology.join(', ')}
          </p>
          {project.linkProject && (
            <a
              href={project.linkProject}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-400 underline"
            >
              Ver Projeto
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Projects;