/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ArchitectureSection from './components/ArchitectureSection';
import SpecsSection from './components/SpecsSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#050814] text-slate-100">
      {/* Latar Belakang Atmosferik Dark Mode (Biru Tua / Navy & Indigo Gelap) */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-[560px] w-[960px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(30,64,175,0.22)_0%,rgba(15,23,42,0.08)_55%,transparent_75%)] blur-3xl" />
        <div className="absolute top-[42%] -left-40 h-[440px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(49,46,129,0.16)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute right-[-120px] bottom-0 h-[460px] w-[540px] rounded-full bg-[radial-gradient(circle_at_center,rgba(29,78,216,0.14)_0%,transparent_70%)] blur-3xl" />
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <FeaturesSection />
          <ArchitectureSection />
          <SpecsSection />
          <TeamSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
