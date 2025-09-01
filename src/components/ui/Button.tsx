import React from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    asChild?: boolean;
}

const base = 'inline-flex items-center justify-center font-title uppercase tracking-wide rounded-md transition-base px-6 py-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-45 disabled:pointer-events-none select-none';

const variants: Record<ButtonVariant, string> = {
    primary: 'bg-red text-white border border-gold hover:bg-red-dark active:translate-y-[1px] shadow',
    secondary: 'bg-blue text-white hover:bg-blue-dark border border-blue active:translate-y-[1px] shadow',
    outline: 'border-2 border-metal text-blue hover:bg-metal-tint active:border-blue',
    ghost: 'text-blue hover:bg-metal-tint',
    danger: 'bg-error text-white hover:bg-error/90 active:translate-y-[1px]'
};

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    loading,
    leftIcon,
    rightIcon,
    className,
    children,
    ...rest
}) => {
    return (
        <button
            className={twMerge(base, variants[variant], loading ? 'cursor-wait' : '', className)}
            disabled={loading || rest.disabled}
            {...rest}
        >
            {leftIcon && <span className="mr-2 flex" aria-hidden>{leftIcon}</span>}
            <span className={loading ? 'opacity-0' : ''}>{children}</span>
            {loading && <span className="absolute animate-pulse text-gold font-mono">...</span>}
            {rightIcon && <span className="ml-2 flex" aria-hidden>{rightIcon}</span>}
        </button>
    );
};

export default Button;
