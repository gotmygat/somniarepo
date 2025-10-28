import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phrases = [
    "What do you envision when you close your eyes?",
    "Where imagination becomes reality",
    "The dream computer awaits"
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-10"
        style={{
          opacity: Math.max(0, 1 - scrollY / 500)
        }}
      >
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center space-y-8 max-w-4xl"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
              style={{
                textShadow: '0 0 40px rgba(74, 144, 226, 0.5)'
              }}
            >
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                REVERIE
              </span>
            </motion.h1>

            <motion.p
              key={currentPhrase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8 }}
              className="text-xl md:text-3xl text-white/80 font-light"
            >
              {phrases[currentPhrase]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            >
              <a
                href="#explore"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/50"
              >
                Explore the Network
              </a>
              <a
                href="#docs"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors duration-300 border border-white/20"
              >
                Documentation
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="pt-8 text-white/60 text-sm"
            >
              <p className="mb-2">Drag to explore • Scroll to discover</p>
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Mainnet Live</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-mono">1M+ TPS</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-white/60 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  );
}
