import React from "react";
import HeroSection from "../components/landing/HeroSection";
import ServicesSection from "../components/landing/ServicesSection";
import ContactSection from "../components/landing/ContactSection";

/**
 * Design language inspired by the "ENGINE" gin can:
 * - Tricolor layout: white top, red racing band, deep royal blue body
 * - Gold accents (laurels, shield), condensed uppercase headings
 * - Subtle metallic edges/shadows to evoke a metal can
 */

export default function LandingPage() {
    return (
        <div className="min-h-screen text-gray-900" style={{ backgroundColor: "#f6f7fb" }}>
            <HeroSection />
            <ServicesSection />
            <ContactSection />
        </div>
    );
}
