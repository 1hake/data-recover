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
    { icon: faServer, title: "SERVEURS & RAID", desc: "RAID 0/1/5/10, reconstruction logique de volumes" },
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

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {supports.map((s, i) => (
                        <div
                            key={i}
                            className="group rounded-2xl border-4 border-red-500 bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl hover:border-red-600"
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md" style={{ background: COLORS.blue }}>
                                <FontAwesomeIcon icon={s.icon} className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="font-extrabold tracking-wide" style={{ color: COLORS.blue }}>
                                {s.title}
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                                <FontAwesomeIcon icon={faClock} className="h-3 w-3" />
                                <span>Diagnostic 24h</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mondial Relay card styled like spec panel */}
                <div className="mt-14 grid items-center gap-8 lg:grid-cols-2">
                    <div className="rounded-2xl border-4 border-red-500 bg-white p-6 shadow-lg">
                        <div className="flex items-center gap-3">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-md" style={{ background: COLORS.red }}>
                                <FontAwesomeIcon icon={faTruck} className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-extrabold tracking-wide" style={{ color: COLORS.dark }}>
                                    LIVRAISON MONDIAL RELAY
                                </h3>
                                <p className="text-sm text-gray-600">Réseau national, suivi inclus, 24–48 h après expédition.</p>
                            </div>
                        </div>

                        <ul className="mt-6 space-y-3 text-sm text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full" style={{ background: COLORS.blue, color: "#fff" }}>1</span>
                                Déposez votre support dans un point relais proche de chez vous.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full" style={{ background: COLORS.blue, color: "#fff" }}>2</span>
                                Diagnostic gratuit sous 24 h et devis transparent.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full" style={{ background: COLORS.blue, color: "#fff" }}>3</span>
                                Récupération par transfert sécurisé ou retour en point relais.
                            </li>
                        </ul>

                        <div className="mt-6 flex items-center justify-between">
                            <p className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm" style={{ background: "#fff7e6", color: COLORS.dark, border: `1px solid ${COLORS.gold}` }}>
                                <FontAwesomeIcon icon={faShieldHalved} className="h-4 w-4" style={{ color: COLORS.gold }} />
                                Rien trouvé = 0 € à payer
                            </p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <FontAwesomeIcon icon={faAward} className="h-3 w-3" />
                                <span>Service premium</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border-4 border-red-500 bg-white p-8 text-center shadow-lg">
                        <EngineShield />
                        <p className="max-w-md text-sm text-gray-700">
                            Vos données sont traitées avec des procédures sécurisées et chiffrées. Confidentialité garantie.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <FontAwesomeIcon icon={faLock} className="h-3 w-3" />
                            <span>Sécurité maximale</span>
                        </div>
                        <EngineShield />
                        <p className="max-w-md text-sm text-gray-700">
                            Vos données sont traitées avec des procédures sécurisées et chiffrées. Confidentialité garantie.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
