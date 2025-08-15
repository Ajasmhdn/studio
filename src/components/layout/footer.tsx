import { Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from './logo';

const socialLinks = [
  { 
    name: 'Facebook', 
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ), 
    url: '#' 
  },
  { 
    name: 'Twitter', 
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ), 
    url: 'https://x.com/TKMCE' 
  },
  { 
    name: 'LinkedIn', 
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ), 
    url: 'https://www.linkedin.com/school/tkmce/' 
  },
  { 
    name: 'Instagram', 
    icon: (props: any) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ), 
    url: '#' 
  },
];

const quickLinks = [
  { name: 'ETLAB', url: 'https://tkmce.etlab.in/user/login' },
  { name: 'TKMCE', url: 'https://tkmce.ac.in/' },
  { name: 'TKMCE AI', url: '/' }, // Next.js root route
  { name: 'KTU', url: 'https://www.ktu.edu.in/' },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Empowering minds, shaping the future through Artificial Intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    target={link.url.startsWith('http') ? "_blank" : undefined} 
                    rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="hover:text-primary transition-colors text-muted-foreground"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  TKM College of Engineering, Karicode, Kollam-691005, Kerala, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a href="tel:+914742712024" className="hover:text-primary transition-colors text-muted-foreground">
                  +91-474-2712024
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a href="mailto:principal@tkmce.ac.in" className="hover:text-primary transition-colors text-muted-foreground">
                  principal@tkmce.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
        <p>Centre for Artificial Intelligence, TKMCE &copy; 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
