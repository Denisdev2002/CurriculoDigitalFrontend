// src/components/FieldDisplay.tsx
import React from 'react';

type Props = {
    icon: React.ReactNode;
    label: string;
    value: string | undefined;
  };  

const FieldDisplay = ({ icon, label, value }: Props) => (
  <div className="flex items-start gap-3 mt-2">
    <div className="text-lime-400 text-xl flex-shrink-0">{icon}</div>
    <div>
      <span className="text-gray-300 font-semibold block">{label}</span>
      <span className="text-white">{value}</span>
    </div>
  </div>
);

export default FieldDisplay;