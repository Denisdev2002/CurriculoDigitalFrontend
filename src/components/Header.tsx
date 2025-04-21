import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black text-lime-400 shadow-md px-8 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold hover:text-white no-underline">
        Curriculo Digital
      </Link>

      <nav className="flex gap-6">
      <Link href="/#hardskills" className="hover:text-white no-underline">
          Skills
        </Link>
        <Link href="/#experiencia" className="hover:text-white no-underline">
          Experiência
        </Link>
        <Link href="/#contato" className="hover:text-white no-underline">
          Contato
        </Link>
        <Link href="/projects" className="hover:text-white no-underline">
          Projetos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
