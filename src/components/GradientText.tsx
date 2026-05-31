import type { HTMLAttributes, ReactNode } from 'react';

interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
}

export default function GradientText({
  children,
  className = '',
  ...props
}: GradientTextProps) {
  return (
    <span
      {...props}
      className={`
            bg-linear-to-r from-cyan-400 via-purple-500 to-cyan-400
            text-transparent bg-clip-text
            bg-size-[200%_auto]
            animate-gradient-x
            ${className}
        `
        .trim()
        .replace(/\s+/g, ' ')}
    >
      {children}
    </span>
  );
}
