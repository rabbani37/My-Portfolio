import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'
import { Heart } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: FaTwitter, url: 'https://twitter.com/yourusername', label: 'Twitter' },
  { icon: FaFacebook, url: 'https://facebook.com/yourusername', label: 'Facebook' },
]

  const quickLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-base-300 mt-20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-8">
          
          {/* Logo/Name */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-xl font-bold text-primary cursor-pointer"
          >
            MyPortfolio
          </Link>

          {/* Quick navigation links */}
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            {quickLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-base-content/70 hover:text-primary cursor-pointer transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex gap-4">
             {socialLinks.map(({ icon: Icon, url, label }) =>
                <div
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="btn btn-circle btn-ghost btn-sm hover:text-primary hover:scale-110 transition-transform"
                >
                    <Icon size={18} />
                </div>

            )}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-base-300" />

          {/* Copyright */}
          <p className="text-sm text-base-content/50 flex items-center gap-1.5 text-center">
            © {currentYear} Your Name. Made with
            <Heart size={14} className="text-primary fill-primary" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer