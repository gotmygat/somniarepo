import { Github, Twitter, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const footerSections = [
    {
      title: 'Technology',
      links: [
        { label: 'Network Info', href: '/documentation' },
        { label: 'Performance', href: '/documentation#performance' },
        { label: 'Architecture', href: '/documentation#architecture' },
        { label: 'Whitepaper', href: '/documentation#whitepaper' }
      ]
    },
    {
      title: 'Developers',
      links: [
        { label: 'Documentation', href: '/documentation' },
        { label: 'Get Started', href: '/documentation#get-started' },
        { label: 'API Reference', href: '/documentation#api' },
        { label: 'Tools & SDKs', href: '/tools' }
      ]
    },
    {
      title: 'Ecosystem',
      links: [
        { label: 'Metaverse Browser', href: '/tools#browser' },
        { label: 'Creator Playground', href: '/tools#playground' },
        { label: 'Community', href: '/about#community' },
        { label: 'Grant Programs', href: '/grants' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/about#blog' },
        { label: 'Careers', href: '/about#careers' },
        { label: 'Contact', href: '/about#contact' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/privacy#cookies' },
        { label: 'Disclaimer', href: '/disclaimer' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Github, href: '#github', label: 'GitHub' },
    { icon: MessageCircle, href: '#discord', label: 'Discord' },
    { icon: Mail, href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-white font-bold text-xl">REVERIE</span>
            </div>

            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            <div className="text-white/60 text-sm">
              © 2024 Reverie Network. All rights reserved.
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-white/40 text-xs max-w-2xl mx-auto">
              Reverie Network is a high-performance Layer 1 blockchain designed for immersive experiences.
              This is a demonstration site created for educational purposes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
