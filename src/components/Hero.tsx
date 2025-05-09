import React from 'react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

type HeroProps = {
  name: string;
  apresentation: string;
};

const Hero = ({ name, apresentation }: HeroProps) => (
  <section className="bg-black text-lime-400 flex flex-col items-center py-20 px-6 text-center">
    <Image
  src="/profile.png"
  alt="Foto de Perfil"
  width={160}
  height={160}
  className="rounded-full mb-4 shadow-xl border-4 border-lime-500 animate-pulse"
  priority
/>


    <h2 className="text-4xl font-bold font-mono">
      {name}
    </h2>

    <p className="mt-4 text-lg max-w-2xl font-mono text-lime-300 leading-relaxed">
    <Typewriter
        words={[apresentation]}
        loop={1}
        cursor
        cursorStyle="_"
        typeSpeed={40}
        deleteSpeed={20}
        delaySpeed={1000}
      />
    </p>
  </section>
);

export default Hero;