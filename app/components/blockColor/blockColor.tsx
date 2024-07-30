import React from 'react';
import './blockColor.css';

interface BlockColorProps {
  title: string;
  color: string;
  colorText: string;
}

export default function blockColor({
  title,
  color,
  colorText,
}: BlockColorProps) {
  return (
    <div
      className="main_color"
      style={{
        backgroundColor: color,
        color: colorText,
        borderColor: colorText,
      }}
    >
      <div>
        <p>{title}</p>
        <p>{color}</p>
      </div>
    </div>
  );
}
