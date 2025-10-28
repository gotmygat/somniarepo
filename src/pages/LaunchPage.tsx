import { motion } from 'framer-motion';
import { Rocket, Zap, Shield, Code } from 'lucide-react';
import WebGLExperience from '../components/WebGLExperience';

export default function LaunchPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <WebGLExperience />

      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Launch Your Journey
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Access the Reverie Network ecosystem and start building immersive experiences today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            <a
              href="https://app.reverie.network"
              className="group relative p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    Main Application
                  </h3>
                  <p className="text-white/60">
                    Access the full Reverie Network platform with all features and tools.
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://developer.reverie.network"
              className="group relative p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    Developer Portal
                  </h3>
                  <p className="text-white/60">
                    Build, test, and deploy your applications on Reverie Network.
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://testnet.reverie.network"
              className="group relative p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                    Testnet Access
                  </h3>
                  <p className="text-white/60">
                    Test your applications in a safe sandbox environment.
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://wallet.reverie.network"
              className="group relative p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-orange-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    Web Wallet
                  </h3>
                  <p className="text-white/60">
                    Manage your assets and interact with the network securely.
                  </p>
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Need Help Getting Started?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Check out our documentation and tutorials to learn how to make the most of the Reverie Network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/documentation"
                className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all"
              >
                View Documentation
              </a>
              <a
                href="/about"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all"
              >
                Contact Support
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
