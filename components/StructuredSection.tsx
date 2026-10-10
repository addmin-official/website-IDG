import React from 'react';

interface StructuredSectionProps {
  id?: string;
  children: React.ReactNode;
  variant?: 'dark' | 'card' | 'elevated';
  spacing?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variantMap = {
  dark: 'bg-[#060D1A]',
  card: 'bg-[#0B172E]',
  elevated: 'bg-[#102447]',
};

const spacingMap = {
  sm: 'py-10 md:py-14',
  md: 'py-14 md:py-20',
  lg: 'py-20 md:py-28',
};

export default function StructuredSection({
  id,
  children,
  variant = 'dark',
  spacing = 'md',
  className = '',
}: StructuredSectionProps) {
  return (
    <section
      id={id}
      className={`${variantMap[variant]} ${spacingMap[spacing]} border-b border-[#102447] ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
