"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideInLeft, slideInRight } from "@/utils/animations";

const About = () => {
  const features = [
    {
      title: "Visionary",
      description: "Pioneering real estate landscapes across Africa and beyond",
    },
    {
      title: "Diplomat",
      description: "Captain & Judge, United Nations Peace Force",
    },
    {
      title: "Scholar",
      description:
        "MBA — European Institute of Leadership & Management, Dublin",
    },
    {
      title: "Philanthropist",
      description: "Founding two global impact foundations",
    },
  ];

  return (
    <section
      id="about"
      className="py-28 lg:py-40 relative overflow-hidden bg-background"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-primary-400)_50%,transparent)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          <div className="relative">
            <span
              className="absolute -top-8 -left-6 select-none pointer-events-none font-cinzel text-9xl font-bold"
              style={{ color: "rgba(212, 175, 55, 0.06)" }}
            >
              1
            </span>
            <div className="absolute top-8 -left-8 w-48 h-64 hidden lg:block border border-gold-glow-25 bg-[rgba(212, 175, 55, 0.07)]"></div>
            <div className="relative">
              <Image
                className="object-cover object-top w-full h-max-[600px] aspect-3/4 contrast-[1.05] saturate-[0.95] relative z-10"
                src="/images/man.jpeg"
                alt="Hon. Boris Nkemateh"
                width={100}
                height={20}
              />
              <div
                className="absolute bottom-6 right-0 translate-x-4 z-20 px-6 py-4 hidden lg:block min-w-[200px] bbackdrop-blur-[20px] border border-gold-glow-30 bg-background-glass"
               
              >
                <div className="text-xs tracking-widest uppercase mb-1 gold-glow-10 font-raleway font-bold text-primary-400">
                  Chairman & MD
                </div>
                <div className="font-semibold font-cinzel text-sm text-neutral-950">
                  Property Trust Group
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 text-primary-400" />
            <span className="text-xs tracking-[0.3em] uppercase font-raleway font-bold text-primary-400">
              About
            </span>
          </div>
          <h2 className="mb-6 font-cinzel text-[clamp(1.8rem, 3vw, 2.8rem)] font-bold tracking-tight text-secondary-400">
            A Leader Forged <br />{" "}
            <span className="text-primary-400">Across Continents</span>{" "}
          </h2>
          <blockquote className="mb-8 pl-5 py-1 border-l-3 border-primary-400 font-playfair text-lg italic leading-[1.7] text-primary-100">
            &apos;Architecting Excellence&apos; the philosophy that defines every venture, every community, and every life touched by Hon. Boris Nkemateh.
          </blockquote>
          <p className="mb-8 font-raleway text-base leading-[1.9] font-normal text-secondary-200">
            Hon. Boris Nkemateh is a globally recognized business leader, real
            estate developer, diplomat, and philanthropist. As Chairman and
            Managing Director of Property Trust Group — headquartered in Buea,
            Cameroon — he has redefined what it means to build with purpose,
            integrity, and generational vision. A proud alumnus of the European
            Institute of Leadership and Management in Dublin, Ireland, where he
            earned his MBA in Business Administration, Boris combines academic
            rigour with frontline entrepreneurial excellence.
          </p>
          <p className="mb-8 font-raleway text-base leading-[1.9] font-normal text-secondary-200">
            From serving as President of the Buea Real Estate Community to
            holding distinguished roles within the United Nations Peace Force,
            Boris brings a rare blend of commercial acumen, civic leadership,
            and humanitarian commitment to everything he does.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-4 transition-all duration-300 hover:scale-[1.02] border border-gold-glow-25 bg-gold-glow-4"
              >
                <div className="mb-1 text-xs tracking-widest uppercase font-raleway font-bold text-primary-400">
                  {feature.title}
                </div>
                <div className=" font-raleway text-xs text-[rgb(136, 136, 128)]">
                  {feature.description}{" "}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
