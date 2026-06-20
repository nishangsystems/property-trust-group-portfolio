'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Globe } from 'lucide-react';
import Button from '../ui/Button';
import { fadeInUp, slideInLeft, slideInRight } from '@/utils/animations';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1JKYSwBBFK/?mibextid=wwXIfr',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.92 3.78-3.92 1.1 0 2.25.2 2.25.2v2.48H15.2c-1.25 0-1.64.78-1.64 1.58v1.88h2.79l-.45 2.9h-2.34V22c4.78-.75 8.44-4.91 8.44-9.93z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/landlord_of_africa',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
        </svg>
      ),
    },
    {
      name: 'X',
      url: 'https://twitter.com/yourprofile',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.9 2H22l-6.77 7.74L23 22h-6.08l-4.76-6.24L6.7 22H3.58l7.24-8.27L1 2h6.23l4.3 5.67L18.9 2Zm-1.07 18.2h1.69L6.31 3.7H4.49L17.83 20.2Z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M4.98 3.5A1.75 1.75 0 1 1 3.23 5.25 1.75 1.75 0 0 1 4.98 3.5ZM3.5 8h2.96v12H3.5Zm7.04 0h2.84v1.64h.04c.4-.75 1.37-1.64 2.82-1.64 3.02 0 3.58 1.99 3.58 4.58V20h-2.96v-6.57c0-1.57-.03-3.59-2.19-3.59-2.19 0-2.52 1.71-2.52 3.48V20h-2.96Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-28 lg:py-40 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-primary-400)_50%,transparent)]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary-400" />
            <span className="text-xs tracking-[0.3em] uppercase font-raleway font-bold text-primary-400">
              Get in Touch
            </span>
            <div className="h-px w-12 bg-primary-400" />
          </div>
          <h2 className="font-cinzel text-3xl md:text-6xl font-bold text-neutral-950">
            Connect with <span className="text-primary-400">Excellence</span>
          </h2>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-px bg-gold-glow-15">
          {/* Left Column - Contact Info */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="p-10 lg:p-14 bg-background"
          >
            <div className="mb-8 font-cinzel text-lg font-bold text-neutral-950 tracking-[0.04em]">
              Direct Contact
            </div>

            <div className="space-y-6 mb-12">
              <a href="tel:+237652078411" className="flex items-center gap-5 group">
                <div className="w-12 h-12 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 border border-gold-glow-40 bg-gold-glow-6">
                  <Phone className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <div className="text-xs tracking-widest uppercase mb-1 text-primary-400 font-raleway font-bold">
                    Phone
                  </div>
                  <div className="font-raleway font-medium text-[0.95rem] text-primary-100 tracking-normal">
                    +237 6 52 07 84 11
                  </div>
                </div>
              </a>

              <a href="https://wa.me/237652078411" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
                <div className="w-12 h-12 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 border border-gold-glow-40 bg-gold-glow-6">
                  <MessageCircle className="w-4 h-4 text-primary-400" />
                </div>
                <div>
                  <div className="text-xs tracking-widest uppercase mb-1 text-primary-400 font-raleway font-bold">
                    WhatsApp
                  </div>
                  <div className="font-raleway font-medium text-[0.95rem] text-primary-100 tracking-normal">
                    Chat on WhatsApp →
                  </div>
                </div>
              </a>

              <a href="https://propertytrustgroup.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
                <div className="w-12 h-12 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 border border-gold-glow-40 bg-gold-glow-6">
                  <Globe className="w-4 h-4 text-primary-400" />
                </div>
                <div>
                  <div className="text-xs tracking-widest uppercase mb-1 text-primary-400 font-raleway font-bold">
                    Website
                  </div>
                  <div className="font-raleway font-medium text-[0.95rem] text-primary-100 tracking-normal">
                    propertytrustgroup.com
                  </div>
                </div>
              </a>
            </div>

            <div className="mb-4 text-xs tracking-widest uppercase text-primary-400 font-raleway font-bold">
              Social Presence
            </div>
            
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary-400 text-primary-400 bg-transparent border border-[rgba(212,175,55,0.35)] hover:text-black"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Quote */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="p-10 lg:p-14 flex flex-col justify-center relative overflow-hidden border border-gold-glow-15"
            style={{
              background: "linear-gradient(135deg, var(--color-ivory) 0%, var(--color-ivory-50) 100%)",
            }}
          >
            <div className="absolute -top-6 -right-6 pointer-events-none select-none font-cinzel text-[12rem] font-bold text-gold-glow-6 leading-none">
              B
            </div>
            
            <div className="relative z-10">
              <div className="mb-2 text-xs tracking-[0.3em] uppercase text-primary-400 font-raleway font-bold">
                PTG Headquarters
              </div>
              <div className="mb-8 font-cinzel text-base font-semibold text-neutral-950 tracking-[0.04em] leading-normal">
                Buea, South West Region
                <br />
                Republic of Cameroon
              </div>
              
              <div className="w-full h-px mb-8 bg-gold-glow-25" />
              
              <blockquote className="mb-8 font-playfair text-lg italic leading-[1.8] text-primary-100">
                Every great partnership begins with a single conversation. I am always available to those who share a vision for excellence.
              </blockquote>
              
              <div className="font-cinzel text-sm font-bold text-primary-400 tracking-[0.08em] uppercase">
                — Hon. Boris Nkemateh
              </div>
              
              <Button className="uppercase text-black mt-10">
                <MessageCircle className="w-4 h-4" /> Begin the conversation
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;