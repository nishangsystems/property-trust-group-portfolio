"use client";

import { motion } from "framer-motion";
import { Building2, Users, Landmark, Shield, Handshake } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const Leadership = () => {
  const positions = [
    {
      icon: Building2,
      title: "Chairman & Managing Director",
      subtitle: "Property Trust Group",
      description:
        "Leading Africa's premier real estate development company with a vision for generational wealth creation and sustainable estate development across borders.",
    },
    {
      icon: Users,
      title: "President",
      subtitle: "Buea Real Estate Community",
      description:
        "Championing the growth of real estate culture and professional standards across Buea and the South West Region of Cameroon.",
    },
    {
      icon: Landmark,
      title: "Youth Senator",
      subtitle: "Lebialem Constituency",
      description:
        "Representing and amplifying the voices of youth in governance, policy-making, and national development dialogues within Cameroon's parliamentary structure.",
    },
    {
      icon: Shield,
      title: "Captain & Judge",
      subtitle: "United Nations Peace Force",
      description:
        "Serving the global community through peacekeeping, conflict resolution, and the upholding of international law and human rights.",
    },
    {
      icon: Handshake,
      title: "Chairman",
      subtitle: "NAP Cooperation",
      description:
        "Driving continental and international cooperative frameworks that support economic development, trade, and strategic partnerships across Africa.",
    },
  ];

  return (
   
    <section
      id="leadership"
      className="py-28 lg:py-40 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-primary-400)_50%,transparent)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
           variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary-400" />
            <span className="text-xs tracking-[0.3em] uppercase font-raleway font-bold">
              Leadership & Public Service
            </span>
            <div className="h-px w-12 bg-primary-400" />
          </div>
          <h2 className="font-cinzel text-3xl md:text-6xl font-bold text-neutral-950">
            Positions of <span className="text-primary-400">Authority</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold-glow-15">
          {positions.map((position, index) => (
            <div key={index}>
              <div
                className="p-8 relative overflow-hidden group  opacity-100 backdrop-blur-[20px] bg-background"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 "
                  style={{
                    background:
                      "radial-gradient(at left top, rgba(212, 175, 55, 0.08) 0%, transparent 65%)",
                  }}
                />
                <div className="w-14 h-14 flex items-center justify-center mb-6 relative z-10 border border-gold-glow-30 bg-gold-glow-6">
                  <position.icon className="w-5 h-5 text-primary-400" />
                </div>
                <div className="mb-1 relative z-10 text-secondary-400 font-cinzel text-sm font-bold  uppercase">
                 {position.title}
                </div>
                <div className="mb-4 text-xs tracking-[0.15em] uppercase relative z-10 font-bold text-primary-400 font-raleway ">
                  {position.subtitle}
                </div>
                <div className="w-8 h-px mb-5 relative z-10 bg-gold-glow-4" />
                <p
                  className="relative z-10 font-raleway text-sm leading-[1.8]"
                  style={{ color: "rgb(136, 136, 128)" }}
                >
                  {position.description}
                </p>
              </div>
            </div>
          ))}
          <div className="p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="background: linear-gradient(135deg, rgba(212, 175, 55, 0.07) 0%, rgba(212, 175, 55, 0.02) 100%); border: 1px solid rgba(212, 175, 55, 0.2); opacity: 1; transform: none;">
              <div className="mb-4 font-cinzel text-[4rem] text-gold-glow-30 font-bold">
                  "
              </div>
              <p className="font-playfair text-base italic leading-[1.7] text-primary-100">
                True leadership is measured not by the titles one holds, but by
                the lives one transforms.
              </p>
              <div className="mt-6 text-xs tracking-widest uppercase font-bold text-primary-400 font-raleway">
                — Hon. Boris Nkemateh
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
