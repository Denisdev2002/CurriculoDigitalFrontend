import React from 'react';
import Image from 'next/image';

type HeroProps = {
  name: string;
  apresentation: string;
};

const Hero = ({ name, apresentation }: HeroProps) => (
  <section className="bg-background text-primary flex flex-col items-center py-20">
    <Image
      src="/profile.png"
      alt="Foto de Perfil"
      width={160}
      height={160}
      className="rounded-full mb-4 shadow-lg border-4 border-lime-400"
      priority
    />
    <h2 className="text-4xl font-bold font-header">{name}</h2>
    <p className="mt-3 text-center max-w-xl text-lg">{apresentation}</p>
  </section>
);

export default Hero;