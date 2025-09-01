import React from 'react';
import { Button } from './Button';

export interface ProductCardProps {
    image: string;
    title: string;
    reference?: string;
    description?: string;
    price?: string;
    badge?: string;
    unavailable?: boolean;
    promoPrice?: string;
    onAdd?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    image,
    title,
    reference,
    description,
    price,
    badge,
    unavailable,
    promoPrice,
    onAdd
}) => {
    return (
        <div className={`relative bg-surface-0 border border-metal-mid rounded-md shadow-sm hover:shadow-lg transition-base p-4 group ${unavailable ? 'opacity-60' : ''}`}>
            {badge && <span className="badge-gold absolute top-3 left-3">{badge}</span>}
            <div className="aspect-video w-full mb-4 overflow-hidden rounded-sm border border-metal-mid bg-surface-1 flex items-center justify-center">
                <img src={image} alt={title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-base" />
            </div>
            <div className="space-y-2">
                <h3 className="font-title text-md uppercase tracking-wide text-blue">{title}</h3>
                {reference && <div className="text-xs font-mono text-metal-dark">REF: {reference}</div>}
                {description && <p className="text-sm text-metal-dark leading-snug max-w-[60ch]">{description}</p>}
                <div className="flex items-end gap-2 mt-2">
                    {price && (
                        <span className={`font-mono text-gold text-lg ${promoPrice ? 'line-through opacity-70' : ''}`}>{price}</span>
                    )}
                    {promoPrice && <span className="font-mono text-red text-xl">{promoPrice}</span>}
                </div>
            </div>
            <div className="mt-4 flex gap-3">
                <Button variant="primary" disabled={unavailable} onClick={onAdd}>Ajouter</Button>
                <Button variant="ghost" disabled={unavailable}>Détails</Button>
            </div>
            {unavailable && (
                <div className="absolute inset-0 backdrop-brightness-75 flex items-center justify-center font-mono text-red text-sm tracking-wide">
                    INDISPONIBLE
                </div>
            )}
        </div>
    );
};

export default ProductCard;
