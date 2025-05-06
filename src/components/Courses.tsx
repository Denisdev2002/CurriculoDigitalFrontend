// components/Course.tsx
import React from 'react';

type CourseProps = {
  curso: string;
  instituicao: string;
  dataInicio: string;
  dataFim: string;
  descricao: string;
  status: string;
};

const Course = ({ curso, instituicao, dataInicio, dataFim, descricao, status }: CourseProps) => (
  <div className="border border-lime-400 rounded-md p-4 bg-neutral-800 shadow-md">
    <h4 className="text-xl font-bold text-white mb-1">{curso}</h4>
    <p className="text-lime-300 mb-1 italic">{instituicao}</p>
    <p className="text-sm text-lime-200 mb-2">
      {dataInicio} - {dataFim} · <span className="font-semibold">{status}</span>
    </p>
    <p className="text-lime-100">{descricao}</p>
  </div>
);

export default Course;