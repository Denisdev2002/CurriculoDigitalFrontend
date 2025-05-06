// components/AcademicSection.tsx
import React, { useEffect, useState } from 'react';
import Course from './Courses';

type CourseType = {
  curso: string;
  instituicao: string;
  dataInicio: string;
  dataFim: string;
  descricao: string;
  status: string;
};

const AcademicSection = () => {
  const [courses, setCourses] = useState<CourseType[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
        try {
          const headers = {
            'API-KEY': process.env.NEXT_PUBLIC_API_KEY || ''
          };
      
          const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
          const res = await fetch(`${API_BASE_URL}/api/courses`, { headers });
      
          if (!res.ok) {
            throw new Error(`Erro HTTP: ${res.status}`);
          }
      
          const text = await res.text();
          const data = text ? JSON.parse(text) : [];
      
          setCourses(data);
        } catch (error) {
          console.error('Erro ao buscar cursos:', error);
        }
      };
      

    fetchCourses();
  }, []);

  if (courses.length === 0) return null;

  return (
    <section id="courses" className="bg-black text-lime-400 py-16 px-6">
      <h3 className="text-3xl font-header text-center mb-8">Formação Acadêmica e Cursos</h3>
      <div className="space-y-6 max-w-4xl mx-auto">
        {courses.map((course, index) => (
          <Course key={index} {...course} />
        ))}
      </div>
    </section>
  );
};

export default AcademicSection;