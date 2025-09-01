import React, { useState } from "react";

const COLORS = {
    red: "#d62828",
    blue: "#0c44a6",
    gold: "#d4b36a",
    dark: "#0a0f1e",
};

export default function ContactSection() {
    const [sent, setSent] = useState(false);

    return (
        <>
            <section id="contact" className="px-6 pb-24">
                <div className="mx-auto max-w-3xl">
                    <header className="text-center">
                        <h2 className="text-3xl font-extrabold tracking-wider" style={{ color: COLORS.dark }}>
                            DEMANDER UN DIAGNOSTIC GRATUIT
                        </h2>
                        <p className="mt-2 text-gray-600">Réponse sous 24 h.</p>
                    </header>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            setSent(true);
                        }}
                        className="mt-8 space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                    >
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label className="text-sm font-semibold text-gray-700">Nom</label>
                                <input required type="text" className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-blue-600" placeholder="Votre nom" />
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-700">Email</label>
                                <input required type="email" className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-blue-600" placeholder="vous@exemple.com" />
                            </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label className="text-sm font-semibold text-gray-700">Type de support</label>
                                <select required className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-blue-600" defaultValue="">
                                    <option value="" disabled>Choisir…</option>
                                    <option>Disque dur / SSD</option>
                                    <option>Clé USB / Carte SD</option>
                                    <option>Serveur / RAID</option>
                                    <option>Autre</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-700">Ville / Code postal</label>
                                <input required type="text" className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-blue-600" placeholder="75011 Paris" />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-700">Décrivez le problème</label>
                            <textarea required rows={5} className="mt-2 w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-blue-600" placeholder="Ex : disque non reconnu, cliquetis, suppression accidentelle…" />
                        </div>

                        <div className="flex items-start gap-3 text-sm">
                            <input type="checkbox" required className="mt-1 h-4 w-4" />
                            <p className="text-gray-600">J'accepte d'être contacté(e) par email. Données traitées de façon confidentielle.</p>
                        </div>

                        <button type="submit" className="w-full rounded-md px-6 py-3 font-semibold text-white transition" style={{ background: COLORS.blue }}>
                            ENVOYER MA DEMANDE
                        </button>
                        {sent && <p className="text-center text-sm" style={{ color: COLORS.blue }}>Merci ! Votre demande a bien été prise en compte.</p>}
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-500">
                        Ou écrivez‑nous : <a href="mailto:contact@jaitoutperdu.fr" className="underline">contact@jaitoutperdu.fr</a>
                    </p>
                </div>
            </section>

            <footer className="border-t px-6 py-10 text-center text-sm" style={{ color: COLORS.dark }}>
                © {new Date().getFullYear()} J'ai tout perdu — Récupération de données
            </footer>
        </>
    );
}
