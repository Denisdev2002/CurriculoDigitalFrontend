import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

type ProjectType = {
  nameProjet: string;
  technology: string[];
  descriptionProject: string;
  linkProject: string;
  owner: 'yes' | 'no';
};

const ProjectsPage = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const headers = {
          'API-KEY': process.env.NEXT_PUBLIC_API_KEY || ''
        };
  
        const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
        const res = await fetch(`${API_BASE_URL}/api/project`, { headers });
  
        if (!res.ok) {
          throw new Error(`Erro HTTP: ${res.status}`);
        }
  
        const text = await res.text();
        const data = text ? JSON.parse(text) : [];
  
        setProjects(data);
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      }
    };
  
    fetchProjects();
  }, []);  

  return (
    <>
      <Header />
      <main className="bg-neutral-900 text-lime-400 px-8 py-12 max-w-4xl mx-auto rounded-md shadow-md mt-10">
        <h1 className="text-3xl font-header text-center mb-8">Projetos</h1>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="border border-lime-400 rounded-md p-4 bg-neutral-800">
              <h2 className="text-2xl font-bold text-white mb-2">{project.nameProjet}</h2>
              <p className="text-lime-300 mb-2">{project.descriptionProject}</p>
              <p className="text-sm text-lime-200 mb-2">
                <strong>Tecnologias:</strong> {project.technology.join(', ')}
              </p>
              {project.linkProject && (
                <a
                  href={project.linkProject}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Ver Projeto
                </a>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default ProjectsPage;