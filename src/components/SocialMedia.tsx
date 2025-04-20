import React, { ReactElement, SVGProps } from 'react';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import SocialIcon from './SocialIcon';

type SocialMediaType = {
  name: string;
  linkPerfil: string;
  personalInformationId: number;
};

const iconMap: Record<string, ReactElement<SVGProps<SVGSVGElement>>> = {
  LinkedIn: <FaLinkedin />,
  GitHub: <FaGithub />,
  Medium: <FaMedium />,
};

type Props = {
  socials: SocialMediaType[];
  email: string;
};

const SocialMedia = ({ socials }: Props) => (
  <section
    id="contato"
    className="bg-neutral-900 text-lime-400 px-8 py-12 max-w-3xl mx-auto rounded-md shadow-md mt-10"
  >
    <h3 className="text-3xl font-header text-center mb-8">Redes Sociais</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {socials.map((social, index) => (
        <SocialIcon
          key={index}
          icon={iconMap[social.name] || <FaGithub />}
          name={social.name}
          link={social.linkPerfil}
        />
      ))}
    </div>
  </section>
);

export default SocialMedia;