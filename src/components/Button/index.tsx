"use client";
import React, { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
  }

  


  const Button: React.FC<ButtonProps> = ({ children, onClick, className } ) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;