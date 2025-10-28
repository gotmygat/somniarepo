import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Database, Network, Shield } from 'lucide-react';

export default function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const features = [
    {
      icon: Zap,
      title: 'Ultra-High Performance',
      description: 'Process over 1 million transactions per second with sub-second finality',
      stat: '1M+ TPS',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Database,
      title: 'Custom Database',
      description: 'VisionDB engine enables ultra-fast read/write times of 70-100 nanoseconds',
      stat: '70ns',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Network,
      title: 'MultiStream Consensus',
      description: 'Parallel processing where each validator operates its own data chain',
      stat: 'Parallel',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Solana-Powered',
      description: 'Built on Solana for unmatched speed, scalability, and low transaction costs',
      stat: 'Layer 1',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="network"
      className="relative py-32 px-4 bg-gradient-to-b from-black via-[#0a0a0f] to-black"
    >
      <motion.div
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Technology That{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Dreams Bigger
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl mx-auto"
          >
            A high-performance, cost-efficient Solana-based Layer 1 blockchain
            designed to power the next generation of immersive experiences
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group"
              data-tech-card={index}
            >
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl from-blue-500 to-purple-600" />

                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="text-white" size={32} />
                  </div>

                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    <span className={`px-3 py-1 bg-gradient-to-r ${feature.color} text-white text-sm font-bold rounded-full`}>
                      {feature.stat}
                    </span>
                  </div>

                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#performance"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/30"
          >
            View Performance
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
