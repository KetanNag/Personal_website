import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  { name: "GitHub", url: "#", icon: Github },
  { name: "Twitter", url: "#", icon: Twitter },
  { name: "LinkedIn", url: "#", icon: Linkedin },
];

const footerLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#' },
  { name: 'Docs', href: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
                <a href="#" className="text-2xl font-bold text-white flex items-center gap-2">
                    <span className="w-3 h-3 bg-accent rounded-full"></span>
                    Dualite
                </a>
                <p className="text-gray-400">The future of frontend development.</p>
                <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                    <a key={social.name} href={social.url} className="text-gray-400 hover:text-white transition-colors">
                        <social.icon className="h-5 w-5" />
                    </a>
                    ))}
                </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Product</h3>
                    <ul className="mt-4 space-y-2">
                        {footerLinks.slice(0, 3).map(link => (
                            <li key={link.name}><a href={link.href} className="text-base text-gray-400 hover:text-white">{link.name}</a></li>
                        ))}
                    </ul>
                </div>
                 <div>
                    <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Resources</h3>
                    <ul className="mt-4 space-y-2">
                        {footerLinks.slice(3).map(link => (
                            <li key={link.name}><a href={link.href} className="text-base text-gray-400 hover:text-white">{link.name}</a></li>
                        ))}
                    </ul>
                </div>
                 <div>
                    <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="text-base text-gray-400 hover:text-white">Privacy</a></li>
                        <li><a href="#" className="text-base text-gray-400 hover:text-white">Terms</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="mt-12 border-t border-gray-800/50 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dualite Technologies Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
