import type { ReactNode } from 'react';

export default function Card({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`${className} rounded-xl p-10 pt-6 bg-gray-800/30 `}>
      {children}
    </div>
  );
}
