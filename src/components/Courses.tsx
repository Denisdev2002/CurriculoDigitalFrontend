import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';
import { CourseType } from '../types';

type Props = {
  courses: CourseType[];
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'short',
  });

const Courses = ({ courses }: Props) => (
  <section className="relative bg-black text-lime-400 px-8 py-12 max-w-4xl mx-auto rounded-xl border border-lime-500/20 shadow-[0_0_20px_#84cc16] mt-10 backdrop-blur-md">
    <h3 className="text-3xl font-mono text-center mb-8 tracking-widest">Cursos</h3>
    <div className="grid gap-6 sm:grid-cols-2">
      {courses.map((course, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 bg-neutral-900 hover:bg-neutral-800 border border-lime-500/10 rounded-xl p-5 transition-all duration-300 shadow-[0_0_10px_#84cc16]/10 hover:shadow-[0_0_20px_#84cc16]/20"
        >
          <div className="flex items-center gap-3 text-white">
            <FaGraduationCap className="text-lime-300 text-xl" />
            <span className="font-semibold text-lg">{course.curso}</span>
          </div>

          <div className="text-sm text-lime-300 font-mono">{course.instituicao}</div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FaCalendarAlt className="text-lime-400" />
            {formatDate(course.dataInicio)} – {formatDate(course.dataFim)} ({course.status})
          </div>

          <div className="flex items-start gap-2 text-sm text-gray-300">
            <FaInfoCircle className="text-lime-400 mt-0.5" />
            <span>{course.descricao}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Courses;