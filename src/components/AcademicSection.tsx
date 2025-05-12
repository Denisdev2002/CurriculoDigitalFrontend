// components/AcademicSection.tsx
import React, { useEffect, useState } from 'react';
import Courses from './Courses';
import { CourseType } from '../types';

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
        const data: CourseType[] = text ? JSON.parse(text) : [];

        setCourses(data);
      } catch (error) {
        console.error('Erro ao buscar cursos:', error);
      }
    };

    fetchCourses();
  }, []);

  if (courses.length === 0) return null;

  return (
    <section id="courses" className="relative bg-black text-lime-400 py-16 px-6 overflow-hidden">
      <h3 className="text-3xl font-mono text-center mb-12 tracking-wider">📚 Formação & Cursos</h3>

      <Courses courses={courses} />
      
      <div className="absolute inset-0 z-[-1] pointer-events-none bg-[radial-gradient(circle,#84cc16_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
    </section>
  );
};

export default AcademicSection;