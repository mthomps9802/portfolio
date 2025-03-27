import {Link, NavLink} from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
    return(
        <nav className="navbar">
            <div className = "navbar-logo">
                <Link to="/"> Mark Thompson </Link>
            </div>
            <ul className="navbar-links">
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/skills">Skills</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/experience">Experience</NavLink></li>
                <li><NavLink to="/education">Education</NavLink></li>
                <li><NavLink to="/certifications">Certifications</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
};


export default Navbar; 