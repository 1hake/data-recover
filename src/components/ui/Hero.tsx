import React from 'react';
import { Button } from './Button';

interface HeroProps {
    title: string;
    subtitle?: string;
    ctaPrimary?: { label: string; onClick?: () => void };
    ctaSecondary?: { label: string; onClick?: () => void };
    backgroundImage?: string;
}

export const Hero: React.FC<HeroProps> = ({
    title,
    subtitle,
    ctaPrimary,
    ctaSecondary,
    backgroundImage
}) => {
    return (
        <section className="relative overflow-hidden bg-blue text-white" style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue/90 via-blue-dark/80 to-surface-dark-alt/70" />
            <div className="container mx-auto px-6 py-28 relative">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-title uppercase tracking-wide mb-6 underline-accent">{title}</h1>
                    {subtitle && <p className="text-lg md:text-xl text-metal-tint leading-relaxed mb-8 max-w-[60ch]">{subtitle}</p>}
                    <div className="flex flex-wrap gap-4">
                        {ctaPrimary && <Button variant="primary" onClick={ctaPrimary.onClick}>{ctaPrimary.label}</Button>}
                        {ctaSecondary && <Button variant="outline" onClick={ctaSecondary.onClick}>{ctaSecondary.label}</Button>}
                    </div>
                </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-64 h-64 opacity-10 pointer-events-none" aria-hidden>
                <svg viewBox="0 0 100 100" className="w-full h-full text-gold" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="50" cy="50" r="46" />
                    <path d="M20 60 L40 30 L60 50 L80 20" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
