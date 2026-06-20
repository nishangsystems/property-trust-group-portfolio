"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, Heart, Users, User, Globe } from "lucide-react";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/utils/animations";

const Philanthropy = () => {
  return (
    <section
      id="philanthropy"
      className="py-28 lg:py-40 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-primary-400)_50%,transparent)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary-400" />
            <span className="text-xs tracking-[0.3em] uppercase font-raleway font-bold">
              Philanthropy & Social Impact{" "}
            </span>
            <div className="h-px w-12 bg-primary-400" />
          </div>
          <h2 className="font-cinzel text-3xl md:text-6xl font-bold text-neutral-950">
            Giving Back,{" "}
            <span className="text-primary-400">Building Forward</span>
          </h2>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-px mb-px bg-gold-glow-15">
          <div className="relative overflow-hidden min-h-225">
            <Image
              className="object-cover object-center w-full min-h-100 h-full "
              src="/images/groupImage4.jpeg"
              alt="Wellness Watch and Agro Excellence Foundation — international collaboration"
              priority
              fill
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, transparent 60%)",
              }}
            />
            <div
              className="absolute top-8 left-8 px-4 py-2 text-xs tracking-[0.15em] uppercase font-raleway font-bold bg-primary-400"
              style={{ color: "rgb(6, 6, 6)" }}
            >
              Foundation I
            </div>
          </div>
          <div
            className="p-10 flex flex-col justify-center bg-background"
          >
            <div className="mb-2 text-xs tracking-[0.2em] uppercase text-primary-400 font-raleway font-bold">
              WWAEF
            </div>
            <h3 className="mb-6 font-cinzel text-lg font-bold tracking-[0.03] leading-[1.4] text-neutral-950">
              Wellness Watch and Agro Excellence Foundation
            </h3>
            <p className="mb-8 font-raleway text-[0.9rem] leading-[1.9] text-secondary-200">
              A beacon of hope for underserved communities, WWAEF bridges the
              gap between sustainable agricultural innovation and accessible
              healthcare, while building resilient communities capable of
              charting their own prosperous futures.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center shrink-0 border border-gold-glow-30 bg-gold-glow-6">
                  <Leaf className="w-3 h-3 text-primary-400" />{" "}
                </div>
                <span className="font-raleway text-sm font-semibold text-primary-100 tracking-normal uppercase">
                  Sustainable Agriculture
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center shrink-0 border border-gold-glow-30 bg-gold-glow-6">
                  <Heart className="w-3 h-3 text-primary-400" />{" "}
                </div>
                <span className="font-raleway text-sm font-semibold text-primary-100 tracking-normal uppercase">
                  Healthcare Development
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center shrink-0 border border-gold-glow-30 bg-gold-glow-6">
                  <Users className="w-3 h-3 text-primary-400" />{" "}
                </div>
                <span className="font-raleway text-sm font-semibold text-primary-100 tracking-normal uppercase">
                  Community Empowerment
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-px mb-px bg-gold-glow-15">
          <div
            className="p-10 flex flex-col justify-center order-2 lg:order-1 bg-background"
          >
            <div className="mb-2 text-xs tracking-[0.2em] uppercase text-primary-400 ffont-raleway font-bold">
              BNF
            </div>
            <h3 className="mb-6 font-cinzel text-lg font-bold tracking-[0.03] leading-[1.4] text-neutral-950">
              The Boris Nkemateh Foundation
            </h3>
            <p className="mb-8 font-raleway text-[0.9rem] leading-[1.9] text-secondary-200">
              Dedicated to the empowerment of the next generation, The Boris
              Nkemateh Foundation invests in youth capacity building, leadership
              training, and high-impact social programs that align with the
              United Nations Sustainable Development Goals creating a world
              where opportunity knows no boundary.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center shrink-0 border border-gold-glow-30 bg-gold-glow-6">
                  <User className="w-3 h-3 text-primary-400" />{" "}
                </div>
                <span className="font-raleway text-sm font-semibold text-primary-100 tracking-normal uppercase">
                  Youth Capacity Building
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center shrink-0 border border-gold-glow-30 bg-gold-glow-6">
                  <Globe className="w-3 h-3 text-primary-400" />{" "}
                </div>
                <span className="font-raleway text-sm font-semibold text-primary-100 tracking-normal uppercase">
                  Social Impact Projects
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center shrink-0 border border-gold-glow-30 bg-gold-glow-6">
                  <Users className="w-3 h-3 text-primary-400" />{" "}
                </div>
                <span className="font-raleway text-sm font-semibold text-primary-100 tracking-normal uppercase">
                  Leadership Development
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center shrink-0 border border-gold-glow-30 bg-gold-glow-6">
                  <Leaf className="w-3 h-3 text-primary-400" />{" "}
                </div>
                <span className="font-raleway text-sm font-semibold text-primary-100 tracking-normal uppercase">
                  Sustainable Development Goals
                </span>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden min-h-225  order-1 lg:order-2 ">
           
             <Image
              className="object-cover object-center w-full h-full  min-h-225"
              src="/images/groupImage15.jpeg"
              alt="Wellness Watch and Agro Excellence Foundation — international collaboration"
              sizes="(max-width: 768px) 100vw, 50vw"
              fill
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, transparent 60%)",
              }}
            />
            <div
              className="absolute top-8 left-8 px-4 py-2 text-xs tracking-[0.15em] uppercase font-raleway font-bold bg-primary-400"
              style={{ color: "rgb(6, 6, 6)" }}
            >
              Foundation II
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philanthropy;
