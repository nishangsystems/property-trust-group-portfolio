'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/utils/animations';

const GlobalPresence = () => {
  const locations = [
    {
      country: 'Cameroon',
      flag: '🇨🇲',
      type: 'Founding Nation',
      cities: ['Buea (Headquarters)', 'Yaoundé', 'Limbe', 'Douala'],
    },
    {
      country: 'United Arab Emirates',
      flag: '🇦🇪',
      type: 'Gulf Hub',
      cities: ['Salah Al Din, Dubai', 'Deira, Dubai'],
    },
    {
      country: 'Nigeria',
      flag: '🇳🇬',
      type: 'West Africa Hub',
      cities: ['Port Harcourt', 'Lagos'],
    },
    {
      country: 'Canada',
      flag: '🇨🇦',
      type: 'North America',
      cities: ['Moncton, New Brunswick'],
    },
    {
      country: 'European Presence',
      flag: '🇱🇹',
      type: 'European Presence',
      cities: ['Vilnius'],
    },
  ];

  return (
   
       <section id="global" className="py-28 lg:py-40 relative overflow-hidden bg-bg-base">
        <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-primary-400)_50%,transparent)]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-cinzel text-8xl md:text-[18rem] font-bold text-gold-glow-3  white-space-nowrap">
            GLOBAL
          </span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

          <motion.div
          variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }} className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary-400" />
              <span className="text-xs tracking-[0.3em] uppercase font-raleway font-bold">
                8 International Branches
              </span>
              <div className="h-px w-12 bg-primary-400" />
            </div>
            <h2 className="font-cinzel text-3xl md:text-6xl font-bold text-neutral-950">
              A World of <span className="text-primary-400">Influence</span>
            </h2>
          </motion.div>
          <div
            className="relative mb-16 overflow-hidden border border-gold-glow-25 h-min-[320px]"
            style={{ background: "rgba(10, 8, 3, 0.8)" }}
          >
            <div className="absolute inset-0 flex items-center justify-center"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="font-family: Cinzel, serif; font-size: 2.5rem; font-weight: 700; color: rgb(212, 175, 55); opacity: 0.15;">
                  PTG
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-gold-glow-15">
            {locations.map((location, index) => (
                  <div  key={index} className="p-6 bg-bg-base">
              <div className="text-2xl mb-3">{location.flag}</div>
              <div className="mb-1 text-xs uppercase font-raleway font-bold">
                {location.type}
              </div>
              <div className="mb-4 font-cinzel font-semibold text-secondary-400">
                {location.country}
              </div>
              <ul className="space-y-3">
                 {location.cities.map((city, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <MapPin className="w-2.5 h-2.5 text-primary-400 flex-shrink-0" />
                    <span className="font-raleway text-xs" style={{ color: "rgb(136, 136, 128)" }}>
                      {city}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default GlobalPresence;