import { motion } from 'framer-motion';
import { Globe, Paintbrush, Code, Users } from 'lucide-react';

export default function EcosystemSection() {
  const ecosystems = [
    {
      icon: Globe,
      title: 'Metaverse Browser',
      description: 'Seamlessly navigate between virtual worlds with Web2 credential integration and a unified identity system',
      features: ['Avatar Creator', 'Profile Management', 'Event Discovery', 'Cross-world Travel'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Paintbrush,
      title: 'Creator Playground',
      description: 'Web-based platform for creators of all skill levels to build and host immersive experiences',
      features: ['Intuitive Authoring', 'Asset Library', 'No-code Tools', 'Instant Publishing'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Developer Tools',
      description: 'Comprehensive suite of tools, SDKs, and APIs for building on the Reverie Network',
      features: ['Full EVM Support', 'RPC Endpoints', 'Smart Contracts', 'Documentation'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Community Hub',
      description: 'Join a thriving community of creators, developers, and dreamers building the future',
      features: ['Discord Community', 'Developer Forums', 'Grant Programs', 'Events & Hackathons'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="ecosystem" className="relative py-32 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            A Complete{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Ecosystem
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl mx-auto"
          >
            Everything you need to create, explore, and thrive in the metaverse
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ecosystems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${item.gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="text-white" size={32} />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">{item.description}</p>

                  <div className="space-y-2 mb-6">
                    {item.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradient}`} />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${item.gradient} text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300`}
                  >
                    Learn More
                  </a>
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
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-12 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Building?</h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Join thousands of developers and creators already building the future of immersive experiences on Reverie Network
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#get-started"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/30"
              >
                Get Started
              </a>
              <a
                href="#docs"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors duration-300 border border-white/20"
              >
                View Documentation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
