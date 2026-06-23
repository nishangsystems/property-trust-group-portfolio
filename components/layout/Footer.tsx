import { MessageCircle } from "lucide-react";

export default function Footer() {

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Leadership", to: "leadership" },
    { name: "PTG", to: "ptg" },
    { name: "Global Presence", to: "global" },
    { name: "Foundations", to: "philanthropy" },
    { name: "Gallery", to: "gallery" },
    { name: "Contact", to: "contact" },
  ];
  return (
   <>
    <footer className="relative overflow-hidden" style={{background: "rgb(3, 3, 3)", "borderTop": "1px solid rgba(212, 175, 55, 0.2)"}}>
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{background: "linear-gradient(90deg, transparent, rgb(212, 175, 55) 30%, rgb(240, 208, 96) 50%, rgb(212, 175, 55) 70%, transparent)"}} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="mb-1 text-xs tracking-[0.35em] uppercase text-primary-400 font-raleway font-bold" >Hon.</div>
            <div className="mb-4 font-cinzel text-[1.3rem] font-bold text-secondary-400 tracking-wide">Boris Nkemateh</div>
            <p className="font-raleway text-[0.78rem] leading-[1.9rem] max-w-65"  style={{color: "rgb(102, 102, 102)"}}>Architecting Excellence Across Real Estate, Leadership, Diplomacy, and Humanity.</p>
          </div>
         <div>
           <div className="mb-6 text-xs tracking-widest uppercase font-raleway font-bold text-primary-400">Navigation</div>
          <ul className="space-y-3">
             {navLinks.map((link, index) => (
              <li key={index}>
                <a                    href={`#${link.to}`}
className="transition-colors duration-200 hover:text-primary-400 text-left font-raleway text-xs uppercase font-semibold tracking-[0.08em]" style={{color: "rgb(85, 85, 85)"}}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
         </div>
           <div className="mb-6 text-xs tracking-widest uppercase" style={{color: "rgb(212, 175, 55) font-family: Raleway, sans-serif font-weight: 700"}}>
            <div className="mb-6 text-xs tracking-widest uppercase text-primary-400 font-bold font-raleway" >Follow the Journey</div>
          <div className="flex flex-wrap gap-3 mb-8">
              <a
                  href="https://www.facebook.com/share/1JKYSwBBFK/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary-400 text-primary-400 bg-transparent border border-[rgba(212,175,55,0.35)] hover:text-black"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.92 3.78-3.92 1.1 0 2.25.2 2.25.2v2.48H15.2c-1.25 0-1.64.78-1.64 1.58v1.88h2.79l-.45 2.9h-2.34V22c4.78-.75 8.44-4.91 8.44-9.93z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/landlord_of_africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary-400 text-primary-400 bg-transparent border border-[rgba(212,175,55,0.35)] hover:text-black"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
                  </svg>
                </a>
                {/* X / Twitter */}
                <a
                  href="https://www.instagram.com/landlord_of_africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary-400 text-primary-400 bg-transparent border border-[rgba(212,175,55,0.35)] hover:text-black"
                  aria-label="X"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M18.9 2H22l-6.77 7.74L23 22h-6.08l-4.76-6.24L6.7 22H3.58l7.24-8.27L1 2h6.23l4.3 5.67L18.9 2Zm-1.07 18.2h1.69L6.31 3.7H4.49L17.83 20.2Z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.instagram.com/landlord_of_africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary-400 text-primary-400 bg-transparent border border-[rgba(212,175,55,0.35)] hover:text-black"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M4.98 3.5A1.75 1.75 0 1 1 3.23 5.25 1.75 1.75 0 0 1 4.98 3.5ZM3.5 8h2.96v12H3.5Zm7.04 0h2.84v1.64h.04c.4-.75 1.37-1.64 2.82-1.64 3.02 0 3.58 1.99 3.58 4.58V20h-2.96v-6.57c0-1.57-.03-3.59-2.19-3.59-2.19 0-2.52 1.71-2.52 3.48V20h-2.96Z" />
                  </svg>
                </a>{" "}
          </div>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase transition-colors hover:text-primary-400 font-raleway font-bold" style={{color: "rgb(68, 68, 68)" }}>propertytrustgroup.com →</a>
        </div>
        </div>
      
      </div>
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 " style={{borderTop: "1px solid rgba(255, 255, 255, 0.05)"}}>
        <div className="font-raleway text-xs uppercase tracking-[0.12rem]" style={{color: "rgb(51, 51, 51)"}}>© 2026  Hon. Boris Nkemateh. All Rights Reserved.</div>
        <div className="font-raleway text-xs uppercase tracking-[0.1rem]" style={{color: "rgb(51, 51, 51)"}}>Powered by <a href="https://propertytrustgroup.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors text-primary-400">Property Trust Group</a></div>
      </div>
    </footer>
    <a href="https://wa.me/237652078411" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp" className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-5 py-3 group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]" style={{"background": "linear-gradient(135deg, rgb(212, 175, 55), rgb(240, 208, 96), rgb(154, 123, 28))", "boxShadow": "rgba(212, 175, 55, 0.3) 0px 8px 32px"}}>
      <MessageCircle className="w-3 h-3" /><span className="hidden sm:inline text-xs tracking-[0.15em] uppercase font-raleway font-bold tracking-[0.15rem]">WhatsApp</span>
    </a></>
  );
}