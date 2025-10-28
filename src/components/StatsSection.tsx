import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: 'easeOut'
    });

    return controls.stop;
  }, [count, value]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = latest.toLocaleString() + suffix;
      }
    });

    return () => unsubscribe();
  }, [rounded, suffix]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

export default function StatsSection() {
  const stats = [
    {
      value: 1000000,
      suffix: '+',
      label: 'Transactions Per Second',
      description: 'Industry-leading throughput'
    },
    {
      value: 100,
      suffix: 'ns',
      label: 'Read/Write Speed',
      description: 'Ultra-fast database operations'
    },
    {
      value: 0.001,
      suffix: '$',
      label: 'Transaction Cost',
      description: 'Sub-cent fees even at peak'
    },
    {
      value: 99.99,
      suffix: '%',
      label: 'Network Uptime',
      description: 'Enterprise-grade reliability'
    }
  ];

  return (
    <section id="performance" className="relative py-32 px-4 bg-gradient-to-b from-black to-[#0a0a0f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Performance{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              By Design
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl mx-auto"
          >
            Built from the ground up to handle the demands of real-time immersive experiences at scale
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="relative z-10">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-4">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
                  <p className="text-white/60 text-sm">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-12 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Why Performance Matters
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Real-Time Interactions</h4>
                      <p className="text-white/60 text-sm">Enable smooth, lag-free experiences for millions of concurrent users</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Cost Efficiency</h4>
                      <p className="text-white/60 text-sm">Sub-cent transactions make microtransactions viable at scale</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Developer Experience</h4>
                      <p className="text-white/60 text-sm">Fast finality means users see results instantly, no waiting</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20" />
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Network Load</span>
                      <span className="text-green-400 font-mono text-sm">23%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '23%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                      />
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <span className="text-white/60">Average Finality</span>
                      <span className="text-blue-400 font-mono text-sm">0.4s</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '95%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full bg-gradient-to-r from-blue-400 to-cyan-500"
                      />
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <span className="text-white/60">Gas Efficiency</span>
                      <span className="text-purple-400 font-mono text-sm">98%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '98%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="h-full bg-gradient-to-r from-purple-400 to-pink-500"
                      />
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">Status</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-400 text-sm font-semibold">All Systems Operational</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
