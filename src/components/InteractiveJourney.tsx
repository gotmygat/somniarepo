import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Code, Users, Rocket, Globe, Sparkles } from 'lucide-react';

export default function InteractiveJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const pathProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const journeyStops = [
    {
      id: 'welcome',
      icon: Sparkles,
      title: 'Welcome to Reverie',
      description: 'Begin your journey into the future of immersive experiences',
      position: 10,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 'technology',
      icon: Zap,
      title: 'High Performance',
      description: '1M+ TPS on Solana-powered infrastructure',
      position: 25,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'developers',
      icon: Code,
      title: 'Developer Tools',
      description: 'Complete SDKs and APIs for building immersive worlds',
      position: 40,
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'ecosystem',
      icon: Globe,
      title: 'Ecosystem',
      description: 'Metaverse browser, creator tools, and community',
      position: 55,
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 'community',
      icon: Users,
      title: 'Community',
      description: 'Join 10,000+ builders and creators',
      position: 70,
      color: 'from-blue-400 to-purple-500'
    },
    {
      id: 'launch',
      icon: Rocket,
      title: 'Start Building',
      description: 'Launch your first immersive experience today',
      position: 85,
      color: 'from-pink-500 to-red-500'
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 1 }}
        >
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>

          <motion.path
            d="M 100 100 Q 300 150, 400 300 T 700 500 Q 900 600, 1000 700 T 1300 900"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="3"
            strokeOpacity="0.3"
            strokeDasharray="10 5"
          />

          <motion.path
            d="M 100 100 Q 300 150, 400 300 T 700 500 Q 900 600, 1000 700 T 1300 900"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="6"
            strokeDasharray="1500"
            strokeDashoffset={useTransform(pathProgress, [0, 100], [1500, 0])}
            strokeLinecap="round"
          />
        </svg>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="w-full max-w-7xl mx-auto">
            {journeyStops.map((stop, index) => {
              const startProgress = index / journeyStops.length;
              const endProgress = (index + 1) / journeyStops.length;

              const opacity = useTransform(
                scrollYProgress,
                [startProgress - 0.05, startProgress, endProgress - 0.05, endProgress],
                [0, 1, 1, 0]
              );

              const scale = useTransform(
                scrollYProgress,
                [startProgress - 0.05, startProgress, endProgress - 0.05, endProgress],
                [0.8, 1, 1, 0.8]
              );

              const y = useTransform(
                scrollYProgress,
                [startProgress - 0.05, startProgress, endProgress],
                [100, 0, -100]
              );

              const rotation = useTransform(
                scrollYProgress,
                [startProgress, endProgress],
                [index % 2 === 0 ? -45 : 45, index % 2 === 0 ? 45 : -45]
              );

              return (
                <motion.div
                  key={stop.id}
                  style={{ opacity, scale, y }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative">
                    <motion.div
                      style={{ rotate: rotation }}
                      className="absolute -inset-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
                    />

                    <div className="relative bg-black/80 backdrop-blur-xl border border-white/20 rounded-3xl p-12 max-w-2xl">
                      <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${stop.color} rounded-2xl flex items-center justify-center transform rotate-45`}>
                        <stop.icon className="w-10 h-10 text-white -rotate-45" />
                      </div>

                      <h2 className="text-5xl font-bold text-white mb-4 text-center">
                        {stop.title}
                      </h2>

                      <p className="text-xl text-white/70 text-center mb-8">
                        {stop.description}
                      </p>

                      <div className="flex justify-center gap-2">
                        {journeyStops.map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 rounded-full transition-all ${
                              i === index
                                ? 'w-8 bg-gradient-to-r ' + stop.color
                                : 'w-2 bg-white/20'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 text-center"
          >
            <div className="text-sm mb-2">Scroll to explore</div>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full mx-auto flex justify-center">
              <motion.div
                animate={{ y: [2, 20, 2] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
