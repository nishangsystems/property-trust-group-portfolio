'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, MessageCircle, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import { 
  staggerContainer, 
  slideInLeft, 
  slideInRight, 
  fadeInUp, 
  scaleIn 
} from '@/utils/animations';

const Hero = () => {
  const stats = [
    { number: "Member", label: "Forbes Business Council" },
    { number: "17+", label: "Premier Estates Developed" },
    { number: "8", label: "Global Branches" },
    { number: "$5M+", label: "Development Income" },
    { number: "President", label: "Buea Real Estate Pres." },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/groupImage.jpeg"
          alt="Biaka Legacy Estate launch — Property Trust Group"
           fill
          className="object-cover object-center  w-full h-full"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 opacity-20 gold-radial-glow" />
      </div>

      {/* Main Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex-1 flex flex-col lg:flex-row items-center max-w-7xl mx-auto w-full px-6 lg:px-10 pt-32 pb-20 gap-12 lg:gap-0"
      >
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.div
            variants={slideInLeft}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-primary-400" />
            <span className="text-xs tracking-[0.35em] uppercase font-bold font-raleway text-primary-400">
              Global Real Estate Developer · Diplomat · Philanthropist
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mb-6 font-cinzel font-bold tracking-tighter text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.1] text-neutral-950"
          >
            HON. BORIS
            <br />
            <span className="text-primary-400">NKEMATEH</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="mb-10 max-w-lg font-playfair italic leading-[1.7] text-[clamp(1rem,2vw,1.2rem)] text-secondary-300"
          >
            Architecting Excellence Across African Real Estate, Global
            Business, and Generational Impact.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <Button>Explore His Legacy</Button>

            <a
              href="https://propertytrustgroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-xs tracking-[0.2em] uppercase flex items-center gap-2 transition-all duration-300 hover:scale-105 border border-primary-200 text-primary-400 font-raleway font-bold"
            >
              Property Trust Group
              <ExternalLink className="w-2.5 h-2.5" />
            </a>

            <a
              href="https://wa.me/237652078411"
              className="px-8 py-4 text-xs tracking-[0.2em] uppercase flex items-center gap-2 transition-all duration-300 hover:scale-105 border border-primary-200 text-secondary-300 font-raleway font-bold"
            >
              <MessageCircle className="w-3 h-3" />
              WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          variants={slideInRight}
          className="shrink-0 relative hidden lg:block"
        >
          <div className="relative w-72 xl:w-80">
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary-400" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-primary-400 bg-linear-to-t from-transparent to-primary-400/30" />
            <Image
              className="object-cover object-top w-full aspect-3/4 contrast-[1.05] saturate-[0.95]"
              src="/images/man.jpeg"
              alt="Hon. Boris Nkemateh"
              width={400}
              height={533}
              priority
              quality={100}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
        className="relative z-10 w-full opacity-100 transform-none border-t border-gold-glow-25 bg-dark backdrop-blur-[20px]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-gold-glow-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="flex flex-col items-center text-center px-6 py-4 bg-background-glass"
            >
              <span className="mb-1 font-bold font-cinzel text-lg text-primary-400">
                {stat.number}
              </span>
              <span
                className="text-center font-raleway font-semibold text-xs uppercase text-neutral-500"
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Button */}
     
      <motion.a
  href="#about"
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
  transition={{ delay: 0.8 }}
  className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity text-primary-400"
>
  <span className="text-xs tracking-widest uppercase font-cinzel">Scroll</span>
  <ChevronDown className="animate-bounce h-4 w-4" />
</motion.a>
    </section>
  );
};

export default Hero;