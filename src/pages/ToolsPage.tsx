import { motion } from 'framer-motion';
import { Code, Package, Blocks, Cpu, FileCode, Zap } from 'lucide-react';

export default function ToolsPage() {
  const tools = [
    {
      icon: Code,
      name: 'Reverie SDK',
      description: 'Complete JavaScript/TypeScript SDK for building immersive experiences',
      version: 'v2.4.1',
      features: ['3D Scene Management', 'Physics Engine', 'Multiplayer Support', 'Asset Loading']
    },
    {
      icon: Package,
      name: 'World Builder',
      description: 'Visual tool for creating and editing virtual worlds without code',
      version: 'v1.8.0',
      features: ['Drag & Drop Interface', 'Asset Library', 'Real-time Preview', 'Export to Production']
    },
    {
      icon: Blocks,
      name: 'Smart Contract Kit',
      description: 'Pre-built Solana smart contracts for common use cases',
      version: 'v3.1.2',
      features: ['NFT Minting', 'Token Management', 'Access Control', 'Marketplace']
    },
    {
      icon: Cpu,
      name: 'Reverie CLI',
      description: 'Command-line interface for project management and deployment',
      version: 'v2.0.5',
      features: ['Project Scaffolding', 'Build & Deploy', 'Testing Tools', 'Performance Analysis']
    },
    {
      icon: FileCode,
      name: 'Unity Plugin',
      description: 'Official Unity plugin for seamless Reverie integration',
      version: 'v1.5.3',
      features: ['One-Click Export', 'Network Sync', 'Asset Optimization', 'Mobile Support']
    },
    {
      icon: Zap,
      name: 'Performance Monitor',
      description: 'Real-time analytics and performance monitoring dashboard',
      version: 'v1.2.8',
      features: ['FPS Tracking', 'Network Stats', 'User Analytics', 'Error Reporting']
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
            Tools & <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
              SDKs
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Professional-grade tools to accelerate your development workflow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-green-500/30 hover:bg-white/10 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <tool.icon className="w-12 h-12 text-green-400" />
                <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-semibold">
                  {tool.version}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">{tool.name}</h2>
              <p className="text-white/60 mb-6">{tool.description}</p>
              <ul className="space-y-2 mb-6">
                {tool.features.map(feature => (
                  <li key={feature} className="text-white/70 text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                Download
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Need Custom Tools?</h2>
          <p className="text-white/60 mb-6 max-w-2xl mx-auto">
            Our team can build custom tools and integrations tailored to your specific needs
          </p>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20">
            Contact Enterprise Team
          </button>
        </motion.div>
      </div>
    </div>
  );
}
