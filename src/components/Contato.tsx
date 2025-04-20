import React from 'react';

type ContatoProps = {
  email: string;
};

const Contato = ({ email }: ContatoProps) => (
  <section id="contato" className="bg-black text-lime-400 py-16 px-6">
    <h3 className="text-3xl font-header text-center mb-8">Contato</h3>
    <p className="text-center text-lg max-w-xl mx-auto">
      Se você quiser entrar em contato comigo, mande um email para:
      <a
        href={`mailto:${email}`}
        className="text-white underline ml-2 hover:text-lime-300"
      >
        {email}
      </a>
    </p>
  </section>
);

export default Contato;