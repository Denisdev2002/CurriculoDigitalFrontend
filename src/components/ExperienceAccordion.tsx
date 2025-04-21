import React, { useState } from 'react';
import {
  FaChevronDown,
  FaChevronUp,
  FaBriefcase,
  FaCalendarAlt,
  FaInfoCircle
} from 'react-icons/fa';
import { ExperienceType } from '../types';
import FieldDisplay from './FieldDisplay';

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long'
  });
};

const companyLogos: Record<string, string> = {
  'Interfocus': '/company/interfocus-logo.png',
};

type Props = {
  experiences: ExperienceType[];
};

const ExperienceAccordion = ({ experiences }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="experiencia" className="bg-neutral-900 text-lime-400 px-8 py-12 max-w-4xl mx-auto rounded-md shadow-md mt-10">
      <h3 className="text-3xl font-header text-center mb-8">Experiências Profissionais</h3>
      <div className="space-y-4">
        {experiences.map((exp, index) => {
          const isActive = activeIndex === index;

          return (
            <div key={index} className="border border-lime-400 rounded-md overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-4 bg-neutral-800 hover:bg-neutral-700 focus:outline-none"
              >
                <div className="flex items-center gap-4">
                <img
                  src={companyLogos[exp.companyName] || '/company/company-default.png'}
                  alt={exp.companyName}
                  className="w-14 h-14 object-contain rounded"
                />

                  <div className="text-left">
                    <p className="text-xl font-bold text-white">{exp.companyName}</p>
                    <p className="text-sm text-lime-300">{exp.jobDescription}</p>
                  </div>
                </div>
                <div className="text-lime-300">
                  {isActive ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden bg-neutral-700 text-white px-4 ${
                  isActive ? 'max-h-[600px] py-4' : 'max-h-0 py-0'
                }`}
              >
                <FieldDisplay
                  icon={<FaBriefcase />}
                  label="Cargo:"
                  value={exp.jobDescription}
                />

                <FieldDisplay
                  icon={<FaCalendarAlt />}
                  label="Período:"
                  value={`${formatDate(exp.startDate)} - ${
                    exp.endDate ? formatDate(exp.endDate) : 'Atualmente'
                  }`}
                />

                <FieldDisplay
                icon={<FaInfoCircle />}
                label="Descrição:"
                value={exp.workdescription ?? ''}
              />

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceAccordion;