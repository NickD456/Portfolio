import React from "react";
import "../Styles/Footer.css";
// Importing social icons/assets
import emailPic from "../assets/img/email.png"; 
import linkedinPic from "../assets/img/linkedin.png"; 
import githubPic from "../assets/img/github.png"; 
export default function Footer() {
    return (
        <footer className="footer-container">
            <h2 className="footer-title">Contact Me</h2>
            
            <div className="footer-links">
                <a 
                    href="mailto:NicholasD456789@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src={emailPic} alt="Email" className="footer-icon" />
                    <span>Email</span>
                </a>

                <a 
                    href="https://linkedin.com/in/nick-decinto/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src={linkedinPic} alt="LinkedIn" className="footer-icon" />
                    <span>LinkedIn</span>
                </a>

                <a 
                    href="https://github.com/NickD456" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src={githubPic} alt="GitHub" className="footer-icon" />
                    <span>GitHub</span>
                </a>
            </div>

            {/* Dynamic year to avoid manual updates*/}
            <p className="footer-copy">
                © {new Date().getFullYear()} Nicholas Decinto. All rights reserved.
            </p>
        </footer>
    );
}