import { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      title: 'Technology',
      items: [
        { label: 'Network Info', href: '#network' },
        { label: 'Performance', href: '#performance' },
        { label: 'Architecture', href: '#architecture' }
      ]
    },
    {
      title: 'Developers',
      items: [
        { label: 'Documentation', href: '#docs' },
        { label: 'Get Started', href: '#get-started' },
        { label: 'Tools', href: '#tools' }
      ]
    },
    {
      title: 'Ecosystem',
      items: [
        { label: 'Metaverse Browser', href: '#browser' },
        { label: 'Playground', href: '#playground' },
        { label: 'Creators', href: '#creators' }
      ]
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-white font-bold text-xl">REVERIE</span>
            </a>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="px-4 py-2 text-white/80 hover:text-white transition-colors">
                    {item.title}
                  </button>
                  <AnimatePresence>
                    {activeDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden"
                      >
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#community"
              className="px-4 py-2 text-white/80 hover:text-white transition-colors flex items-center space-x-1"
            >
              <span>Community</span>
              <ExternalLink size={14} />
            </a>
            <a
              href="#launch"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Launch App
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.title}>
                  <div className="text-white font-semibold mb-2">{item.title}</div>
                  <div className="pl-4 space-y-2">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className="block text-white/70 hover:text-white transition-colors"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <a
                href="#launch"
                className="block w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-center"
              >
                Launch App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
