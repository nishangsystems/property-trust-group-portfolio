'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ZoomIn } from 'lucide-react';
import { fadeInUp, fadeInLeft, staggerContainer } from '@/utils/animations';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/Tab';

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  title: string;
  tag: string;
}

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');

  const galleryImages: GalleryImage[] = [
    { id: 1, src: '/images/groupImage2.jpeg', category: 'excellence', title: 'Executive Leadership Portrait', tag: 'Leadership Excellence' },
    { id: 2, src: '/images/groupImage.jpeg', category: 'projects', title: 'Biaka Legacy Estate Launch', tag: 'Real Estate Projects' },
    { id: 3, src: '/images/groupImage3.jpeg', category: 'projects', title: 'PTG Community Investors Summit', tag: 'Real Estate Projects' },
    { id: 4, src: '/images/groupImage4.jpeg', category: 'engagements', title: 'International Business Summit', tag: 'International Engagements' },
    { id: 5, src: '/images/groupImage5.jpeg', category: 'presence', title: 'Bugatti Residences — Dubai Expo', tag: 'Global Presence' },
    { id: 6, src: '/images/groupImage6.jpeg', category: 'projects', title: 'Land Title Handover Ceremony', tag: 'Real Estate Projects' },
    { id: 7, src: '/images/groupImage7.jpeg', category: 'projects', title: 'PTG Strategic Development Milestone', tag: 'Real Estate Projects' },
    { id: 8, src: '/images/groupImage8.jpeg', category: 'projects', title: 'PTG Operations & Services Briefing', tag: 'Real Estate Projects' },
    { id: 9, src: '/images/groupImage9.jpeg', category: 'activities', title: 'PTG Strategic Planning Session', tag: 'Foundation Activities' },
    { id: 10, src: '/images/groupImage10.jpeg', category: 'projects', title: 'Property Investment Initiative', tag: 'Real Estate Projects' },
    { id: 11, src: '/images/groupImage11.jpeg', category: 'presence', title: 'Binghatti Development — Dubai', tag: 'Global Presence' },
    { id: 12, src: '/images/groupImage12.jpeg', category: 'projects', title: 'Community Land Development Forum', tag: 'Real Estate Projects' },
    { id: 13, src: '/images/groupImage13.jpeg', category: 'engagements', title: 'ARTEM Interior Design Partnership', tag: 'International Engagements' },
    { id: 14, src: '/images/groupImage14.jpeg', category: 'excellence', title: 'Executive Business Consultation', tag: 'Leadership Excellence' },
    { id: 15, src: '/images/groupImage15.jpeg', category: 'engagements', title: 'UAE Diplomatic Engagement', tag: 'International Engagements' },
    { id: 16, src: '/images/groupImage16.jpeg', category: 'excellence', title: 'Corporate Excellence Recognition', tag: 'Leadership Excellence' },
    { id: 17, src: '/images/groupImage17.jpeg', category: 'engagements', title: 'Professional Business Symposium', tag: 'Serving the Community' },
  ];

  const getFilteredImages = (category: string) => {
    if (category === 'all') return galleryImages;
    return galleryImages.filter(img => img.category === category);
  };

  const renderGalleryGrid = (category: string) => {
    const filtered = getFilteredImages(category);
    
    return (
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
  transition={{ 
        staggerChildren: 0.08,  // delay between each children animation
        delayChildren: 0.01 // delay for the first animation to start
      }}
        className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
      >
        {filtered.map((image) => (
          <motion.div
            key={image.id}
            variants={fadeInLeft}
                                  transition={{ delay: 0.1 }} // add delay to the image

            className="break-inside-avoid relative group cursor-pointer overflow-hidden"
          >
            <Image
              className="w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              src={image.src}
              alt={image.title}
              width={400}
              height={500}
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5"
              style={{
                background: "linear-gradient(transparent 30%, rgba(0, 0, 0, 0.8) 100%)",
              }}
            >
              <div className="flex items-end justify-between">
                <div>
                  <div className="mb-1 text-xs tracking-widest uppercase text-primary-400 font-raleway font-bold">
                    {image.tag}
                  </div>
                  <div className="font-cinzel text-xs text-secondary-400 font-semibold tracking-[0.04em]">
                    {image.title}
                  </div>
                </div>
                <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 ml-3 border border-primary-400 text-primary-400">
                  <ZoomIn className="w-4 h-4 text-primary-400" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <section id="gallery" className="py-28 lg:py-40 relative overflow-hidden">
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
              Gallery
            </span>
            <div className="h-px w-12 bg-primary-400" />
          </div>
          <h2 className="font-cinzel text-3xl md:text-6xl font-bold text-neutral-950">
            A Visual <span className="text-primary-400">Chronicle</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="flex flex-wrap justify-center gap-2 mb-10">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="projects">Real Estate Projects</TabsTrigger>
            <TabsTrigger value="engagements">International Engagements</TabsTrigger>
            <TabsTrigger value="presence">Global Presence</TabsTrigger>
            <TabsTrigger value="activities">Foundation Activities</TabsTrigger>
            <TabsTrigger value="excellence">Leadership Excellence</TabsTrigger>
          </TabsList>

          <TabsContent value="all">{renderGalleryGrid('all')}</TabsContent>
          <TabsContent value="projects">{renderGalleryGrid('projects')}</TabsContent>
          <TabsContent value="engagements">{renderGalleryGrid('engagements')}</TabsContent>
          <TabsContent value="presence">{renderGalleryGrid('presence')}</TabsContent>
          <TabsContent value="activities">{renderGalleryGrid('activities')}</TabsContent>
          <TabsContent value="excellence">{renderGalleryGrid('excellence')}</TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;