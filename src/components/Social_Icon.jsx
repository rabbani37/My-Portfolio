import { FaGithub, FaLinkedin,  FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function SocialLinks() {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/rabbani37', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/mdgolamrabbani1', label: 'LinkedIn' },
    { icon: FaXTwitter, url: 'https://x.com/golam_rabbani11', label: 'Twitter' },
    { icon: FaFacebook, url: 'https://facebook.com/', label: 'Facebook' },
  ]

  return (
    <div className="flex gap-4 justify-center lg:justify-start mt-5">
      {socialLinks.map(({ icon: Icon, url, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="btn btn-circle btn-ghost hover:text-primary hover:scale-110 transition-transform"
        >
          <Icon size={22} />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks