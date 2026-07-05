import { Link } from 'react-scroll'
import ThemeToggle from './ThemeToggle'

const navList = (
    <>
        <li>
            <Link to="home" smooth={true} duration={500} offset={-70} spy={true}
                activeClass="text-primary font-bold"
                className="cursor-pointer transition-all duration-300 hover:font-bold hover:text-primary">
                Home
            </Link>
        </li>
        <li>
            <Link to="about" smooth={true} duration={500} offset={-70} spy={true}
                activeClass="text-primary font-bold"
                className="cursor-pointer transition-all duration-300 hover:font-bold hover:text-primary">
                About
            </Link>
        </li>
        <li>
            <Link to="projects" smooth={true} duration={500} offset={-70} spy={true}
                activeClass="text-primary font-bold"
                className="cursor-pointer transition-all duration-300 hover:font-bold hover:text-primary">
                Projects
            </Link>
        </li>
        <li>
            <Link to="contact" smooth={true} duration={500} offset={-70} spy={true}
                activeClass="text-primary font-bold"
                className="cursor-pointer transition-all duration-300 hover:font-bold hover:text-primary">
                Contact
            </Link>
        </li>
    </>
)

function Navbar() {
    return (
        <div className="navbar bg-base-100/80 backdrop-blur shadow-md px-4 lg:px-10 fixed top-0 z-50">
            <div className="navbar-start">
                {/* Mobile dropdown menu */}
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
                        ☰
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box shadow mt-3 w-52 z-[100]"
                    >
                        {navList}
                    </ul>
                </div>

                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="text-xl font-bold ml-2 cursor-pointer"
                >
                    MyPortfolio
                </Link>
            </div>

            {/* Desktop menu */}
            <div className="navbar-end hidden lg:flex items-center gap-2">
                <ul className="menu menu-horizontal px-1">{navList}</ul>
                <ThemeToggle />
            </div>

            {/* Mobile এ theme toggle সবসময় visible */}
            <div className="navbar-end lg:hidden">
                <ThemeToggle />
            </div>
        </div>
    )
}

export default Navbar