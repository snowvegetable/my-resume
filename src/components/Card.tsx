import type { ReactNode } from 'react';

export default function Card({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border border-gray-800 hover:border-gray-700 transition-colors duration-300 ease-in-out rounded-xl p-10 pt-6 bg-gray-800/30 ${className}`}
    >
      {children}
    </div>
  );
}
