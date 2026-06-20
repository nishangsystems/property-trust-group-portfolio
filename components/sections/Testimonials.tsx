'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeInUp } from '@/utils/animations';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Hon. Boris Nkemateh is not merely a real estate developer — he is a nation builder. Property Trust Group gave my family the land and home we always dreamed of, with full transparency and zero compromise.",
      author: "Mr. Emmanuel Tanyi",
      role: "Investor & Landowner · Buea, Cameroon",
      initial: "E",
    },
    {
      id: 2,
      quote: "Working with Hon. Boris Nkemateh has been an absolute privilege. His vision for real estate development in Africa is unmatched, and his commitment to excellence is evident in every project he undertakes.",
      author: "Mrs. Sarah Johnson",
      role: "Real Estate Investor · Lagos, Nigeria",
      initial: "S",
    },
    {
      id: 3,
      quote: "The Property Trust Group team, under the leadership of Hon. Boris Nkemateh, delivered beyond our expectations. Their professionalism and dedication to quality made our investment journey seamless.",
      author: "Dr. Michael Okafor",
      role: "Property Developer · Abuja, Nigeria",
      initial: "M",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Content variants - only for elements that should animate
 
const contentVariants: Variants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};


  // Individual item animations
  const itemVariants: Variants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  // Quote text - no animation (static)
  const quoteVariants = {
    initial: {
      opacity: 1,
      y: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="testimonials" className="py-28 lg:py-40 relative overflow-hidden">
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
              Testimonials
            </span>
            <div className="h-px w-12 bg-primary-400" />
          </div>
          <h2 className="font-cinzel text-3xl md:text-6xl font-bold text-secondary-400">
            Voices of <span className="text-primary-400">Trust</span>
          </h2>
        </motion.div>

        {/* Testimonial Card - Static Card */}
        <div className="p-10 lg:p-16 relative overflow-hidden border border-gold-glow-25 backdrop-blur-[20px]">
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary-400" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary-400" />
          
                <Quote className="mb-6 w-6 h-6 text-primary-400" />
          {/* Animated Content - Only Icon and Author fade, Quote stays static */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
           
              
              {/* Quote Text - DOES NOT ANIMATE (stays static) */}
              <motion.div variants={quoteVariants}>
                <blockquote
                  className="mb-10 font-playfair text-base md:text-xl italic leading-[1.8]"
                  style={{ color: "rgb(216, 208, 188)" }}
                >
                  &apos;{testimonials[currentIndex].quote}&apos;
                </blockquote>
              </motion.div>
              
              {/* Author Info - Animates */}
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-primary-400">
                  <span className="font-cinzel text-sm font-bold" style={{ color: "rgb(6, 6, 6)" }}>
                    {testimonials[currentIndex].initial}
                  </span>
                </div>
                <div>
                  <div className="font-cinzel text-sm font-bold text-secondary-400 tracking-[0.03em]">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="font-raleway text-xs text-primary-400 tracking-[0.12rem] uppercase font-bold">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-400 w-6 h-2'
                    : 'bg-gold-glow-30 w-2 h-2 hover:bg-gold-glow-60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:bg-[rgba(212,175,55,0.15)] border border-gold-glow-30"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-primary-400" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:bg-[rgba(212,175,55,0.15)] border border-gold-glow-30"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-primary-400" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;