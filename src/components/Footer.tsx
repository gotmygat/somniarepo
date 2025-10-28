import { Github, Twitter, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Technology',
      links: [
        { label: 'Network Info', href: '#technology' },
        { label: 'Performance', href: '#stats' },
        { label: 'Architecture', href: '#technology' },
        { label: 'Whitepaper', href: '#technology' }
      ]
    },
    {
      title: 'Developers',
      links: [
        { label: 'Documentation', href: '#technology' },
        { label: 'Get Started', href: '#journey' },
        { label: 'API Reference', href: '#technology' },
        { label: 'Tools & SDKs', href: '#ecosystem' }
      ]
    },
    {
      title: 'Ecosystem',
      links: [
        { label: 'Metaverse Browser', href: '#ecosystem' },
        { label: 'Creator Playground', href: '#ecosystem' },
        { label: 'Community', href: '#ecosystem' },
        { label: 'Grant Programs', href: '#ecosystem' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#ecosystem' },
        { label: 'Blog', href: '#ecosystem' },
        { label: 'Careers', href: '#ecosystem' },
        { label: 'Contact', href: '#ecosystem' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Disclaimer', href: '#' }
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
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
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
