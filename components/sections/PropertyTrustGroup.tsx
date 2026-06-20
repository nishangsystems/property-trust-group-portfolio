'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CircleCheck, ExternalLink } from 'lucide-react';
import Button from '../ui/Button';
import { fadeInUp, slideInRight, staggerContainer } from '@/utils/animations';

const PropertyTrustGroup = () => {
  const services = [
    'Verified Land Sales',
    'Estate Development',
    'Construction & Architecture',
    'Property Management',
    'Diaspora Investment Solutions',
    'Real Estate Consulting',
  ];

  const galleryItems = [
    {
      id: 1,
      image: '/images/groupImage3.jpeg',
      tag: 'Community Engagement',
      title: 'PTG Community Investors Summit',
      location: 'Buea, Cameroon',
    },
    {
      id: 2,
      image: '/images/groupImage8.jpeg',
      tag: 'Real Estate & Construction',
      title: 'PTG Operations & Services Briefing',
      location: 'Buea, Cameroon',
    },
    {
      id: 3,
      image: '/images/groupImage9.jpeg',
      tag: 'Leadership & Strategy',
      title: 'Strategic Planning Session',
      location: 'PTG Headquarters',
    },
    {
      id: 4,
      image: '/images/groupImage6.jpeg',
      tag: 'Verified Land Sales',
      title: 'Land Title Handover Ceremony',
      location: 'Buea, Cameroon',
    },
  ];

  return (
    <section
      id="ptg"
      className="py-28 lg:py-40 relative overflow-hidden bg-background"
    >
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-primary-400)_50%,transparent)]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header & Services Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-end">
          {/* Left Content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{   once: true,      // ← Animate only once
  amount: 0.1      // ← Trigger when 10% of the element is visible 
  }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-primary-400" />
              <span className="text-xs tracking-[0.3em] uppercase font-bold font-raleway text-primary-400">
                Flagship Enterprise
              </span>
            </div>
            
            <h2 className="mb-6 font-cinzel font-bold leading-[1.2]  text-3xl md:text-[2.8rem] text-neutral-950">
              Property Trust <br />
              <span className="text-primary-400">Group</span>
            </h2>
            
            <p className="font-raleway text-[0.95rem] leading-[1.9] text-secondary-200">
              Property Trust Group (PTG) is West Africa&apos;s premier real estate
              development company a trusted name for verified land sales,
              estate development, construction, and property management. With
              8 international branches and over 17 estates delivered, PTG is
              the cornerstone of Boris Nkemateh&apos;s vision to democratize real
              estate ownership across Africa and the diaspora.
            </p>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 transition-all duration-300 hover:scale-[1.02] bg-gold-glow-4 border border-gold-glow-25"
                >
                  <CircleCheck className="h-4 w-4 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span className="font-raleway font-semibold text-primary-100 text-[0.78rem]">
                    {service}
                  </span>
                </div>
              ))}
              
              {/* Button - Full width */}
              <div className="col-span-2 mt-2">
                <Button className="text-black w-full flex items-center justify-center gap-2">
                  VISIT PTG WEBSITE
                  <ExternalLink className="w-2.5 h-2.5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="group relative overflow-hidden aspect-3/4"
              style={{ background: "rgb(8, 8, 8)" }}
            >
              <Image
                className="object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-110"
                src={item.image}
                alt={item.title}
                width={400}
                height={533}
              />
              
              <div className="absolute inset-0 transition-opacity duration-300 bg-[linear-gradient(transparent_40%,rgba(0,0,0,0.85)_100%)]" />
              
              <div
                className="absolute top-4 left-4 px-3 py-1 text-xs tracking-widest uppercase bg-gold-glow-9 font-raleway font-bold"
                style={{ color: "rgb(6, 6, 6)" }}
              >
                {item.tag}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="mb-1 font-cinzel text-base font-semibold text-secondary-400 uppercase">
                  {item.title}
                </div>
                <div className="font-raleway text-xs text-primary-400 uppercase">
                  {item.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTrustGroup;