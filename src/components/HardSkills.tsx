import React from 'react';
import {
  SiDotnet,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiDocker,
  SiLinux,
  SiGit,
  SiCplusplus,
} from 'react-icons/si';

const skills = [
  { name: 'C# / .NET', icon: <SiDotnet /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'React.js', icon: <SiReact /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'Linux (Básico)', icon: <SiLinux /> },
  { name: 'Git', icon: <SiGit /> },
  {name: 'C++', icon: <SiCplusplus />},
];

const HardSkills = () => (
  <section className="relative bg-black text-lime-400 px-8 py-12 max-w-4xl mx-auto rounded-xl border border-lime-500/20 shadow-[0_0_20px_#84cc16] mt-10 backdrop-blur-md">
  <h3 className="text-3xl font-mono text-center mb-8 tracking-widest">Hard Skills</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
    {skills.map((skill, index) => (
  <div
    key={index}
    className="flex flex-col items-center text-center p-4 w-32 h-32 border border-lime-500/10 rounded-xl hover:shadow-lime-400 hover:scale-105 transition-transform duration-300"
  >
    <div className="text-lime-300 mb-2">
      <span className="text-5xl">{React.cloneElement(skill.icon, { size: 40 })}</span>
    </div>
    <span className="text-sm font-mono">{skill.name}</span>
  </div>
))}
  </div>
</section>
);

export default HardSkills;