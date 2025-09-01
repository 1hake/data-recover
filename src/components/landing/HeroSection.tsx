import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const COLORS = {
    red: "#d62828",
    blue: "#0c44a6",
    gold: "#d4b36a",
    dark: "#0a0f1e",
};

function Laurels() {
    return (
        <svg viewBox="0 0 300 120" className="mx-auto h-14 w-auto" aria-hidden>
            <g fill={COLORS.gold}>
                <path d="M150 88c-18 0-32-14-32-32V42h64v14c0 18-14 32-32 32z" fill="none" />
                {/* left laurel */}
                {Array.from({ length: 10 }).map((_, i) => (
                    <ellipse key={`l${i}`} cx={70 - i * 6} cy={70 - i * 3} rx="8" ry="14" transform={`rotate(${-(i * 6)} ${70 - i * 6} ${70 - i * 3})`} />
                ))}
                {/* right laurel */}
                {Array.from({ length: 10 }).map((_, i) => (
                    <ellipse key={`r${i}`} cx={230 + i * 6} cy={70 - i * 3} rx="8" ry="14" transform={`rotate(${i * 6} ${230 + i * 6} ${70 - i * 3})`} />
                ))}
                {/* ribbon */}
                <path d="M110 96c10 8 30 12 40 12s30-4 40-12l-6-6c-10 6-24 9-34 9s-24-3-34-9l-6 6z" />
            </g>
        </svg>
    );
}

export default function HeroSection() {
    return (
        <section className="relative isolate overflow-hidden">
            {/* top white */}
            <div className="px-6 pt-16 pb-10 text-center" style={{ background: "#ffffff" }}>
                <div className="mx-auto max-w-3xl">
                    {/* LOGO BLOCK like ENGINE */}
                    <div className="mx-auto inline-flex items-center rounded-sm px-4 py-3" style={{ background: COLORS.red }}>
                        {/* big emoji */}
                        <span className="text-8xl">😱</span>
                        <span className="text-2xl font-extrabold tracking-wider text-white">J'AI TOUT PERDU</span>
                    </div>
                    <p className="mt-3 text-xs tracking-widest text-gray-600">24h/24 et 7j/7</p>
                </div>
            </div>

            {/* red band */}
            <div className="h-3 w-full" style={{ background: COLORS.red }} />

            {/* blue body */}
            <div className="px-6 pb-16 pt-12 text-center text-white" style={{ background: COLORS.blue }}>
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-4xl font-extrabold tracking-wider md:text-5xl" style={{ letterSpacing: "0.06em" }}>
                        RETROUVER VOS DONNÉES
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl text-blue-100">
                        Diagnostic gratuit sous 24h. Récupération rapide et sécurisée partout en France.
                    </p>
                    <div className="mt-6">
                    </div>
                    <div className="mt-8">
                        <a
                            href="#services"
                            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                        >
                            VOIR LES SERVICES
                            <FontAwesomeIcon icon={faArrowDown} className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                {/* subtle metallic "rim" */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-b from-white/0 via-black/10 to-black/20" />
            </div>
        </section>
    );
}
