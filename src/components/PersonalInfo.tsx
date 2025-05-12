import React from 'react';

type Props = {
  info: {
    name: string;
    phone: string;
    location: string;
    email: string;
    apresentation: string;
    dateOfBirth: string;
  };
};

const PersonalInfo = ({ info }: Props) => {
  const formattedDate = new Date(info.dateOfBirth).toLocaleDateString('pt-BR');

  return (
    <section className="relative bg-black text-lime-400 px-8 py-12 max-w-4xl mx-auto rounded-xl border border-lime-500/20 shadow-[0_0_20px_#84cc16] mt-10 backdrop-blur-md">
      <h3 className="text-3xl font-mono text-center mb-8 tracking-wider">Informações Pessoais</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 text-base font-mono">
        <div>
          <span className="text-white">📞 Telefone:</span><br />
          <span>{info.phone}</span>
        </div>

        <div>
          <span className="text-white">📍 Localização:</span><br />
          <span>{info.location}</span>
        </div>

        <div>
          <span className="text-white">✉️ Email:</span><br />
          <a href={`mailto:${info.email}`} className="text-lime-400 underline hover:text-white transition duration-200">
            {info.email}
          </a>
        </div>

        <div>
          <span className="text-white">🎂 Data de nascimento:</span><br />
          <span>{formattedDate}</span>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;