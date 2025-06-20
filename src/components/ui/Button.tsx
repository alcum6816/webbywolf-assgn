'use client';

import React from 'react';
import Image from 'next/image';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  showArrow?: boolean;
  arrowSrc?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children = 'Loerum Ipsum',
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  type = 'button',
  className = '',
  showArrow = true,
  arrowSrc = '/images/img_arrow_1_white_a700.svg',
  ...props
}) => {
  const variants = {
    primary: 'bg-accent-dark text-white hover:bg-accent focus:ring-accent',
    secondary: 'bg-gray-light text-primary hover:bg-gray-lighter focus:ring-gray'
  };

  const sizes = {
    sm: 'px-3 py-1 text-sm h-8',
    md: 'px-6 py-2 h-[38px]',
    lg: 'px-8 py-3 text-lg h-12'
  };

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
        flex flex-row items-center justify-center gap-2
        rounded-[5px]
        transition-colors 
        duration-150 
        focus:outline-none 
        focus:ring-2 
        focus:ring-opacity-50
        shadow-[0px_4px_20px_#00000026]
        font-inter font-bold text-[15px] leading-[19px]
        ${variants[variant]} 
        ${sizes[size]} 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} 
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      <span>{children}</span>
      {showArrow && (
        <Image
          src={arrowSrc}
          alt="Arrow"
          width={16}
          height={2}
          className="ml-1"
        />
      )}
    </button>
  );
};

export default Button;