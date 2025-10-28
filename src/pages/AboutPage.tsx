import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Heart } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Pushing the boundaries of what\'s possible in virtual experiences'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Building together with creators and developers worldwide'
    },
    {
      icon: Target,
      title: 'Performance Focused',
      description: 'Delivering the fastest, most reliable network for immersive content'
    },
    {
      icon: Heart,
      title: 'Creator Empowerment',
      description: 'Providing tools and support to bring imagination to life'
    }
  ];

  const team = [
    { name: 'Alex Chen', role: 'CEO & Co-Founder', background: 'Former Meta Reality Labs' },
    { name: 'Sarah Martinez', role: 'CTO & Co-Founder', background: 'Ex-Solana Core Team' },
    { name: 'James Park', role: 'Head of Engineering', background: 'Previously at Epic Games' },
    { name: 'Maria Silva', role: 'Head of Design', background: 'Former Adobe Creative Cloud' },
    { name: 'David Kim', role: 'Head of Community', background: 'Ex-Discord Growth Team' },
    { name: 'Emily Zhang', role: 'Head of Partnerships', background: 'Former Unity Business Dev' }
  ];

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Reverie
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Building the infrastructure for the next generation of immersive experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-6">
            Reverie Network was founded in 2022 with a simple yet ambitious goal: to create the most powerful,
            accessible, and developer-friendly platform for building immersive virtual experiences.
          </p>
          <p className="text-lg text-white/70 leading-relaxed mb-6">
            We believe the future of the internet is spatial, interactive, and deeply immersive. But building
            these experiences today is too complex, too expensive, and too limiting. That's why we're building
            Reverie—a high-performance Solana-based network with custom infrastructure designed specifically
            for the demands of real-time 3D applications.
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            Today, over 10,000 developers and creators use Reverie to build everything from virtual worlds and
            social spaces to immersive games and interactive experiences. We're backed by leading investors and
            supported by an incredible community of builders.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <value.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-semibold mb-2">{member.role}</p>
                <p className="text-white/60 text-sm">{member.background}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for building the future
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:scale-105 transition-transform">
            View Open Positions
          </button>
        </motion.div>
      </div>
    </div>
  );
}
