# Design System Industriel Vintage Premium

Ce document résume les tokens et composants implémentés. Voir `src/styles/tokens.css` pour les variables CSS.

## Couleurs Principales
Rouge (#D11F27), Bleu (#003DA5), Or (#C5A85D), Métal (#BFC3C7), Blanc (#FFFFFF)

## Typographies
- Titres: Oswald
- Corps: Roboto
- Mono / labels: Space Mono

## Fichiers
- `src/styles/tokens.css` : variables + utilitaires
- `tailwind.config.js` : mapping Tailwind
- Composants UI: `src/components/ui/`

## Composants fournis
- Button (variants: primary, secondary, outline, ghost, danger)
- Hero (titre, sous-titre, CTA)
- ProductCard (image, badges, prix promo)
- Header (navigation basique)

## Utilitaires CSS
- `.underline-accent` soulignement décoratif
- `.panel-metal` panneau encadré métal
- `.badge-gold` badge or

## Bonnes pratiques
- Utiliser les classes `font-title`, `font-body`, `font-mono`
- Respecter contrastes (or et rouge sur surfaces sombres)
- Préférer components UI plutôt que duplication de classes complexes

## Roadmap
- Ajout d'icônes mécaniques SVG
- Dark mode (classe `.dark` déjà supportée par tokens)
- États de chargement détaillés et skeletons
