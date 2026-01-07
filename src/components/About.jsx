import React from "react";
import "../Styles/About.css";
// Importing assets and components
import profilePic from "../assets/img/Headshot.png"; 
import Footer from "./Footer.jsx";

export default function About() {
    return (
        <div className="about-page">
            <section className="about-container">
                {/* Background stars handled via CSS for the space theme effect */}
                <div className="static-stars-bg"></div>

                <div className="about-content">
                    <header className="about-header">
                        <h1 className="about-title">About <span className="highlight">Me</span></h1>
                        <p className="about-tagline">Games, software, and interactive design.</p>
                    </header>

                    {/* Main Section: Bio text on left, Profile/Education card on right */}
                    <div className="about-main-row">
                        <div className="about-text-col">
                            <p>
                                I’m Nicholas Decinto, a software developer and game designer with a passion for creating interactive experiences. I’ve earned a degree in Interactive Media and Game Design, along with a minor in Computer Science.
                            </p>
                            <p>
                                I focus on connecting solid programming with strong creative direction. Whether I’m optimizing C++ systems or designing 3D and 2D games, I aim to make things that feel both technically sound and enjoyable to play.
                            </p>
                        </div>

                        <div className="about-visual-col">
                            {/* Profile Image Wrap */}
                            <div className="profile-frame">
                                <img src={profilePic} alt="Nicholas Decinto" className="profile-img" />
                            </div>
                            
                            {/* Education Quick-View Card */}
                            <div className="education-card">
                                <div className="edu-header">
                                    <h4>B.S. in Interactive Media & Game Design <br /> Minor in Computer Science</h4>
                                </div>
                                <div className="edu-details">
                                    <p className="school-name">SUNY Polytechnic Institute</p>
                                    <div className="edu-meta">
                                        <span>2023 - 2025</span>
                                        <span className="separator">|</span>
                                        <span>Utica, NY</span>
                                        <span className="separator">|</span>
                                        <span>GPA 3.98</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Technical Skills Section: Grouped by category for better readability */}
                    <section className="skills-section">
                        <h2 className="skills-title">Skills</h2>
                        <div className="skills-grid">
                            
                            {/* Category: Programming Languages */}
                            <div className="skill-category">
                                <h3 className="category-name">Languages</h3>
                                <div className="skill-list">
                                    <span className="skill-tag">Java</span>
                                    <span className="skill-tag">C#</span>
                                    <span className="skill-tag">C++</span>
                                    <span className="skill-tag">JavaScript</span>
                                    <span className="skill-tag">HTML/CSS</span>
                                </div>
                            </div>

                            {/* Category: Game Development Engines */}
                            <div className="skill-category">
                                <h3 className="category-name">Game Engines</h3>
                                <div className="skill-list">
                                    <span className="skill-tag">Unity</span>
                                    <span className="skill-tag">Unreal Engine</span>
                                    <span className="skill-tag">Godot</span>
                                    <span className="skill-tag">Raylib</span>
                                </div>
                            </div>

                            {/* Category: Industry Standard Tools & Libraries */}
                            <div className="skill-category">
                                <h3 className="category-name">Tools & Tech</h3>
                                <div className="skill-list">
                                    <span className="skill-tag">Git</span>
                                    <span className="skill-tag">Blender</span>
                                    <span className="skill-tag">EnTT</span>
                                    <span className="skill-tag">CMake</span>
                                    <span className="skill-tag">PostgreSQL</span>
                                    <span className="skill-tag">Microsoft Access</span>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </section>
            
            {/* Global Footer */}
            <Footer />
        </div>
    );
}