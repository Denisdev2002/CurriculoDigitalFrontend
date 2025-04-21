import React from 'react';
import {
  SiDotnet,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiDocker,
  SiLinux,
  SiGit,
} from 'react-icons/si';

const skills = [
  { name: 'C# / .NET', icon: <SiDotnet /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'React.js', icon: <SiReact /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'Linux (Básico)', icon: <SiLinux /> },
  { name: 'Git', icon: <SiGit /> },
];

const HardSkills = () => (
  <section id="hardskills" className="bg-neutral-800 text-lime-400 px-8 py-12 max-w-3xl mx-auto rounded-md shadow-md mt-10">
    <h3 className="text-3xl font-header text-center mb-8">Hard Skills</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="text-5xl mb-2">{skill.icon}</div>
          <span className="text-lg">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default HardSkills;