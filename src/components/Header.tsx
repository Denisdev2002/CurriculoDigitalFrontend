import React from 'react';
import Link from 'next/link';
import { Terminal } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-black text-lime-400 shadow-lg px-8 py-5 flex justify-between items-center border-b border-lime-500 font-mono">
      <Link href="/" className="text-2xl font-bold hover:text-white transition-all flex items-center gap-2">
        <Terminal size={24} /> Currículo Digital
      </Link>

      <nav className="flex gap-6 text-md tracking-wide">
        {[
          { href: '/#hardskills', label: 'Skills' },
          { href: '/#courses', label: 'Cursos' },
          { href: '/#experiencia', label: 'Experiência' },
          { href: '/#contato', label: 'Contato' },
          { href: '/projects', label: 'Projetos' }
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:text-white transition-all relative before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-lime-400 before:transition-all hover:before:w-full"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;