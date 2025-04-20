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
    <section className="bg-neutral-900 text-lime-400 px-8 py-12 max-w-4xl mx-auto rounded-md shadow-md mt-10">
      <h3 className="text-3xl font-header text-center mb-8">Informações Pessoais</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 text-base">
        <div>
          <strong className="text-white">Telefone:</strong>{' '}
          <span>{info.phone}</span>
        </div>

        <div>
          <strong className="text-white">Localização:</strong>{' '}
          <span>{info.location}</span>
        </div>

        <div>
          <strong className="text-white">Email:</strong>{' '}
          <a
            href={`mailto:${info.email}`}
            className="text-lime-400 no-underline hover:text-white"
          >
            {info.email}
          </a>
        </div>

        <div>
          <strong className="text-white">Data de nascimento:</strong>{' '}
          <span>{formattedDate}</span>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;