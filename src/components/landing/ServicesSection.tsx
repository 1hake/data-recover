import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHardDrive,
    faCloudArrowUp,
    faServer,
    faTruck,
    faShieldHalved,
    faClock,
    faAward,
    faLock,
} from "@fortawesome/free-solid-svg-icons";

const COLORS = {
    red: "#d62828",
    blue: "#0c44a6",
    gold: "#d4b36a",
    dark: "#0a0f1e",
};

const supports = [
    { icon: faHardDrive, title: "DISQUES & SSD", desc: "HDD, SSD SATA/NVMe, partitions corrompues" },
    { icon: faCloudArrowUp, title: "SUPPORTS AMOVIBLES", desc: "Clés USB, cartes SD, microSD, supports endommagés" },
];

function EngineShield() {
    return (
        <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden>
            <path d="M32 60C14 55 8 46 8 28V14l24-6 24 6v14c0 18-6 27-24 32z" fill="#fff" />
            <path d="M32 60C14 55 8 46 8 28V14l24-6 24 6v14c0 18-6 27-24 32z" fill="none" stroke={COLORS.gold} strokeWidth="3" />
            <path d="M18 34h28v-8H18zm5 8h18l3-8H20z" fill={COLORS.gold} />
        </svg>
    );
}

export default function ServicesSection() {
    return (
        <section id="services" className="relative px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <header className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-extrabold tracking-wider" style={{ color: COLORS.dark }}>
                        SUPPORTS PRIS EN CHARGE
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Du disque grand public aux tableaux RAID professionnels.
                    </p>
                </header>

                {/**
                 * Responsive grid placement tweak:
                 * - If fewer than 3 items, constrain width & center to avoid an empty wide third column.
                 * - If 3+ items, use full 3-col layout.
                 */}
                <ul
                    className={[
                        "mt-10 grid gap-6",
                        supports.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-2 max-w-3xl mx-auto justify-center",
                    ].join(" ")}
                    role="list"
                >
                    {supports.map((s) => (
                        <li
                            key={s.title}
                            className="group  text-black relative rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-red-400 focus-within:-translate-y-1 focus-within:shadow-xl focus-within:border-red-400 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white before:to-slate-50 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
                            tabIndex={0}
                            role="listitem"
                            aria-label={`${s.title} - ${s.desc}`}
                        >
                            <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 text-white shadow-inner shadow-blue-900/20 transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110">
                                <FontAwesomeIcon icon={s.icon} className="h-6 w-6" aria-hidden="true" />
                                <span className="sr-only">{s.title}</span>
                            </div>
                            <h3 className="font-extrabold tracking-wide text-blue-800 drop-shadow-sm">
                                {s.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.desc}</p>
                            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
                                <FontAwesomeIcon icon={faClock} className="h-3 w-3" aria-hidden="true" />
                                <span>Diagnostic 24h</span>
                            </div>
                            <span className="pointer-events-none absolute inset-x-4 bottom-2 h-px bg-gradient-to-r from-transparent via-red-300/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
                            <span className="absolute inset-0 rounded-2xl ring-0 ring-red-400/0 transition group-focus-visible:ring-4 group-focus-visible:ring-red-400/40" aria-hidden="true" />
                        </li>
                    ))}
                </ul>

                {/* Mondial Relay card styled like spec panel */}
                <div className="mt-14 flex justify-center">
                    <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-red-400/70 bg-white/95 p-6 shadow-md ring-1 ring-black/5 transition-all duration-300 hover:shadow-xl">
                        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_60%),linear-gradient(120deg,rgba(214,40,40,0.15),transparent)]" aria-hidden="true" />
                        <div className="flex items-center gap-3">
                            <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-500 text-white shadow-inner shadow-red-900/30">
                                <FontAwesomeIcon icon={faTruck} className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div>
                                <h3 className="text-lg font-extrabold tracking-wide" style={{ color: COLORS.dark }}>
                                    LIVRAISON MONDIAL RELAY
                                </h3>
                                <p className="text-sm text-gray-600">Réseau national, suivi inclus, 24–48 h après expédition.</p>
                            </div>
                        </div>
                        <ol className="mt-6 space-y-4 text-sm text-gray-700" role="list" aria-label="Étapes du service">
                            {[
                                'Déposez votre support dans un point relais proche de chez vous.',
                                'Diagnostic gratuit sous 24 h et devis transparent.',
                                'Récupération par transfert sécurisé ou retour en point relais.'
                            ].map((step, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-blue-500 text-xs font-bold text-white shadow ring-2 ring-white">{idx + 1}</span>
                                    <span className="leading-relaxed">{step}</span>
                                </li>
                            ))}
                        </ol>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <p className="inline-flex items-center gap-2 rounded-xl border border-amber-300/70 bg-amber-50 px-3 py-2 text-sm font-medium text-slate-800 shadow-sm">
                                <FontAwesomeIcon icon={faShieldHalved} className="h-4 w-4 text-amber-500" aria-hidden="true" />
                                Rien trouvé = 0 € à payer
                            </p>
                            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                <FontAwesomeIcon icon={faAward} className="h-3 w-3" aria-hidden="true" />
                                <span>Service premium</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
