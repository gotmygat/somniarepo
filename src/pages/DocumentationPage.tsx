import { motion } from 'framer-motion';
import { Book, Code, Terminal, Boxes } from 'lucide-react';

export default function DocumentationPage() {
  const sections = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Quick start guide to building on Reverie Network',
      topics: ['Installation', 'Configuration', 'First Project', 'Best Practices']
    },
    {
      icon: Code,
      title: 'API Reference',
      description: 'Complete API documentation for all Reverie services',
      topics: ['REST API', 'WebSocket API', 'GraphQL', 'Authentication']
    },
    {
      icon: Terminal,
      title: 'CLI Tools',
      description: 'Command-line interface for deploying and managing projects',
      topics: ['Installation', 'Commands', 'Configuration', 'Deployment']
    },
    {
      icon: Boxes,
      title: 'SDKs',
      description: 'Official SDKs for multiple programming languages',
      topics: ['JavaScript/TypeScript', 'Python', 'Rust', 'Go']
    }
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
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Documentation
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Everything you need to build amazing experiences on Reverie Network
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <section.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h2 className="text-2xl font-bold text-white mb-3">{section.title}</h2>
              <p className="text-white/60 mb-6">{section.description}</p>
              <ul className="space-y-2">
                {section.topics.map(topic => (
                  <li key={topic} className="text-white/80 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Quick Start</h2>
          <div className="bg-black/50 rounded-lg p-6 font-mono text-sm text-white/80">
            <p className="mb-2"># Install the Reverie CLI</p>
            <p className="text-green-400 mb-4">npm install -g @reverie/cli</p>
            <p className="mb-2"># Create a new project</p>
            <p className="text-green-400 mb-4">reverie init my-world</p>
            <p className="mb-2"># Start development server</p>
            <p className="text-green-400">reverie dev</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
