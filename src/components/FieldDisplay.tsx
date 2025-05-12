// src/components/FieldDisplay.tsx
import React from 'react';

type Props = {
    icon: React.ReactNode;
    label: string;
    value: string | undefined;
  };  

const FieldDisplay = ({ icon, label, value }: Props) => (
  <div className="flex items-start gap-4 mt-4 bg-neutral-800/70 p-3 rounded-lg border-l-4 border-lime-500 shadow-md hover:shadow-lime-500/20 transition-all duration-300">
    <div className="text-lime-400 text-2xl flex-shrink-0 animate-pulse">
      {icon}
    </div>
    <div>
      <span className="text-lime-300 font-semibold block text-sm uppercase tracking-wider">
        {label}
      </span>
      <span className="text-white text-base">{value}</span>
    </div>
  </div>
);

export default FieldDisplay;