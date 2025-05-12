import React, { ReactElement, SVGProps } from 'react';

type Props = {
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  name: string;
  link: string;
};

const SocialIcon = ({ icon, name, link }: Props) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-4 py-2 border border-lime-400/30 rounded-lg text-lime-300 hover:bg-neutral-800 hover:text-white shadow-[0_0_10px_#84cc16] transition-all duration-300"
  >
    <div className="text-lime-400">
      {React.cloneElement(icon, { width: 28, height: 28 })}
    </div>
    <span className="text-base font-mono">{name}</span>
  </a>
);

export default SocialIcon;
