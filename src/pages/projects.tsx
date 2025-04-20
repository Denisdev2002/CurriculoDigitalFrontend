// pages/projects.tsx
import React from 'react';
import Header from '../components/Header';

const projects = [
  {
    nameProjet: "Currículo Digital",
    technology: ["C# 9", "React.js", "Next.js", "TypeScript", "Jest"],
    descriptionProject: "Projeto criado com o intuito de desenvolver e aplicar conhecimentos em React.js e aprender sobre testes de interface utilizando o Jest.",
    linkProject: "",
    owner: "yes"
  },
  {
    nameProjet: "Sharebooks",
    technology: ["C#", "TypeScript", "Angular", "Entity Framework", "Docker"],
    descriptionProject: "O Sharebook é um aplicativo open source de doação de livros, criado em 2018. Contribuí com a implementação de logs utilizando o Serilog.",
    linkProject: "https://www.sharebook.com.br/",
    owner: "no"
  }
];

const ProjectsPage = () => {
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