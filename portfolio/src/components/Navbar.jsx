import "../Styles/Navbar.css";
import { NavLink } from "react-router-dom";
// Importing the resume PDF as a module to ensure it's bundled correctly by Vite/Webpack
import Resume from "../assets/Nicholas_Decinto_Resume.pdf";

export default function Navbar() {
    return (
        <nav className="top-bar">
            {/* Logo/Brand Identifier */}
            <div className="nav-logo">ND</div>

            <ul className="nav-links">
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/experience" className={({ isActive }) => (isActive ? "active" : "")}>
                        Experience
                    </NavLink>
                </li>
                <li className="nav-resume-wrapper">
                    <a 
                        href={Resume}
                        download="Nicholas_Decinto_Resume.pdf"
                        className="resume-btn"
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}