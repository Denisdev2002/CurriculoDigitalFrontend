import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';
import { ExperienceType } from '../types';
import FieldDisplay from './FieldDisplay';

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
  });

const companyLogos: Record<string, string> = {
  'Interfocus': '/company/interfocus-logo.png',
};

type Props = {
  experiences: ExperienceType[];
};

const ExperienceSection = ({ experiences }: Props) => {
  return (
    <section
      id="experiencia"
      className="relative bg-black text-lime-400 px-6 py-16 max-w-4xl mx-auto rounded-xl border border-lime-500/20 shadow-[0_0_20px_#84cc16] backdrop-blur-md mt-10"
    >
      <h3 className="text-3xl font-mono text-center mb-10 tracking-widest">
        Experiências Profissionais
      </h3>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 bg-neutral-900 p-6 rounded-xl border border-lime-500/20 shadow-[0_0_10px_#84cc16] transition-all duration-300 hover:shadow-[0_0_20px_#84cc16] hover:bg-neutral-800"
          >
            <div className="flex items-center gap-4">
              <img
                src={companyLogos[exp.companyName] || '/company/company-default.png'}
                alt={exp.companyName}
                className="w-12 h-12 object-contain rounded-md border border-lime-500"
              />
              <div>
                <p className="text-xl font-bold text-white">{exp.companyName}</p>
                <p className="text-sm text-lime-300 font-mono">{exp.jobDescription}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <FieldDisplay
                icon={<FaBriefcase />}
                label="Cargo:"
                value={exp.jobDescription}
              />
              <FieldDisplay
                icon={<FaCalendarAlt />}
                label="Período:"
                value={`${formatDate(exp.startDate)} – ${exp.endDate ? formatDate(exp.endDate) : 'Atualmente'}`}
              />
              <FieldDisplay
                icon={<FaInfoCircle />}
                label="Descrição:"
                value={exp.workdescription ?? 'Sem descrição disponível'}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
