import React from 'react';
import Button from '../Button';

interface NavItem { label: string; href: string; }

interface HeaderProps {
    logo?: React.ReactNode;
    nav?: NavItem[];
    onCTAClick?: () => void;
    dark?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ logo, nav = [], onCTAClick, dark }) => {
    return (
        <header className={`w-full sticky top-0 z-40 transition-base ${dark ? 'bg-surface-dark text-white' : 'bg-surface-0 text-blue'} border-b border-metal-mid shadow-sm`}>
            <div className="container mx-auto px-6 h-20 flex items-center gap-8">
                <div className="flex items-center gap-3 font-title tracking-wide text-xl">
                    {logo || <span className="text-gold">VINTAGE OIL</span>}
                </div>
                <nav className="hidden md:flex gap-6 text-sm font-title uppercase tracking-wide">
                    {nav.map(item => (
                        <a key={item.href} href={item.href} className="relative hover:text-gold transition-colors">
                            <span>{item.label}</span>
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-red transition-all group-hover:w-full" />
                        </a>
                    ))}
                </nav>
                <div className="ml-auto flex items-center gap-4">
                    <Button variant="outline" onClick={onCTAClick}>Contact</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
