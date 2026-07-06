import { Link } from 'react-scroll'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  const linkClass =
    "cursor-pointer transition-all duration-300 hover:font-bold hover:text-primary"
  const activeClass = "text-primary font-bold"

  const navItems = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'SkillBadge' },
    { to: 'education', label: 'Education' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
  ]

  const renderNavItems = () => (
    <>
      {navItems.map((item) => (
        <li key={item.to}>
          <Link
            to={item.to}
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass={activeClass}
            className={linkClass}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </>
  )

  return (
    <div className="navbar bg-base-100/80 backdrop-blur shadow-md px-4 lg:px-10 fixed top-0 z-50">
      <div className="navbar-start">
       
        <details className="dropdown lg:hidden">
          <summary className="btn btn-ghost list-none">☰</summary>
          <ul className="menu menu-sm dropdown-content  border-2 border-gray-500 bg-base-200 rounded shadow mt-3  z-100">
            {renderNavItems()}
          </ul>
        </details>

        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-xl font-bold ml-2 cursor-pointer"
        >
          Rabbani.dev
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex items-center gap-2">
        <ul className="menu menu-horizontal px-1">{renderNavItems()}</ul>
        <ThemeToggle />
      </div>

      <div className="navbar-end lg:hidden">
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Navbar;