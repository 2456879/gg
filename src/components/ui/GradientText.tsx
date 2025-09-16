import React from 'react';

type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
};

const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  className = '',
  variant = 'primary'
}) => {
  const gradients = {
    primary: 'from-primary-500 via-secondary-500 to-accent-500',
    secondary: 'from-secondary-500 via-primary-500 to-accent-500'
  };

  return (
    <span className={`bg-gradient-to-r ${gradients[variant]} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;