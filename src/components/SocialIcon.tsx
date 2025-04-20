import React, { ReactElement, SVGProps } from 'react';

type Props = {
    icon: ReactElement<SVGProps<SVGSVGElement>>; // garante que o ícone aceite props SVG como `size`
    name: string;
    link: string;
  };

const SocialIcon = ({ icon, name, link }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-lime-300 hover:text-white transition-colors"
    >
      <div className="text-lime-400">
        {React.cloneElement(icon, { width: 28, height: 28 })}
      </div>
      <span className="text-lg underline underline-offset-4">{name}</span>
    </a>
  );
};

export default SocialIcon;