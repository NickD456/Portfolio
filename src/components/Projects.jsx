import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../Styles/Projects.css";
import Footer from "./Footer.jsx";

// Asset imports (Images and Videos)
import project1Img from "../assets/img/portfolio/milksong/title.png";
import project2Img from "../assets/img/portfolio/AlgorithmDemo.png";
import project3Img from "../assets/img/portfolio/ZombieCafePic.png";
import project4Img from "../assets/img/portfolio/VRimg1.png";
import project5Img from "../assets/img/portfolio/Escape5.png";
import project6Img from "../assets/img/portfolio/assestfinal.png";
import vrImg2 from "../assets/img/portfolio/VRimg2.png";

import milksongGif from "../assets/img/portfolio/milksong/features.gif";
import sortingGif from "../assets/img/portfolio/AlgorithmDemo.gif";
import milksongVid from "../assets/img/portfolio/Videos/milksong_trailer.mp4"; 
import zombieVid from "../assets/img/portfolio/Videos/finalvideo.mp4";
import Escape5Vid from "../assets/img/portfolio/Videos/Dungen.mp4";
import DungenVid from "../assets/img/portfolio/Videos/Trailer.mp4";
import BlenderAnim from "../assets/img/portfolio/Videos/3dAnim.mp4";

export default function Projects() {
    const location = useLocation();

    // Centralized project data array with GitHub links included
    const projectData = [
        {
            id: "milksong",
            title: "Milksong",
            github: "https://github.com/DYankee/CS370", // Update with your link
            description: "Milksong is a 2d action platformer built in C++ using raylib as its graphics library.",
            detailedDescription: "The game features 4 distinct levels with multiple upgrades for the player to obtain. They will face off against both melee and ranged enemies while traversing the map collecting power ups such as extra health, a double jump and a ranged attack.",
            thumbnail: project1Img,
            content: [
                { type: "video", url: milksongVid, caption: "Official Gameplay Trailer" },
                { type: "image", url: milksongGif, caption: "Gameplay Mechanics Showcase" }
            ],
            tags: ["C++", "ENTT", "Raylib", "CMake"]
        },
        {
            id: "sorting-visualizer",
            title: "Sorting Algorithm Visualizer",
            github: "https://github.com/NickD456/Sorting-Algorithm-Visualizer", // Update with your link
            description: "An interactive web application built with JavaScript, HTML, and CSS to visualize common sorting algorithms.",
            detailedDescription: "An interactive web application built with JavaScript, HTML, and CSS to visualize common sorting algorithms. Users can see sorting animations, hear audio feedback, and import datasets from CSV or Excel files.",
            thumbnail: project2Img,
            content: [
                { type: "image", url: sortingGif, caption: "Sorting Animation Demo" }
            ],
            tags: ["JavaScript", "HTML", "CSS"]
        },
        {
            id: "zombie-cafe",
            title: "Zombie Cafe",
            github: "https://github.com/NickD456/COM-419-Cafe", // Update with your link
            description: "Zombie Cafe is a game built in Unity where you run a cafe by day and defend it by night.",
            detailedDescription: "Lead programmer for a 3-person team. Implemented a recruiting system where customers become defenders at night, and an NPC looting system for resource gathering.",
            thumbnail: project3Img,
            content: [
                { type: "video", url: zombieVid, caption: "Full Gameplay trailer" }
            ],
            tags: ["Unity", "C#", "Blender"]
        },
        {
            id: "vr-museum",
            title: "VR Museum",
            github: "", // Update with your link
            description: "Collaborative project with engineering students to interact with CAD parts in VR.",
            detailedDescription: "Translated Revit and SolidWorks CAD designs into Unity-compatible models, allowing students to manipulate engineering parts in a virtual environment.",
            thumbnail: project4Img,
            content: [
                { type: "image", url: project4Img, caption: "VR Environment Layout" },
                { type: "image", url: vrImg2, caption: "CAD Model Interaction View" }
            ],
            tags: ["Unity", "C#", "VR", "Revit", "Blender"]
        },
        {
            id: "escape5",
            title: "Escape5",
            github: "https://github.com/NickD456/Escape5", // Update with your link
            description: "A narrative puzzle game developed in Godot.",
            detailedDescription: "Spearheaded development of a Backrooms-inspired maze. Utilized procedural generation scripts to create expansive levels efficiently.",
            thumbnail: project5Img,
            content: [
                { type: "video", url: Escape5Vid, caption: "Procedural Maze Generation Logic" },
                { type: "video", url: DungenVid, caption: "Atmospheric Trailer" }
            ],
            tags: ["Godot", "GDScript"]
        },
        {
            id: "nature-animation",
            title: "Nature Animation",
            github: "", // Leave empty if no source code available
            description: "River animation created in Blender.",
            detailedDescription: "Showcasing fluid simulations and environmental texturing rendered in Blender.",
            thumbnail: project6Img,
            content: [
                { type: "video", url: BlenderAnim, caption: "Final Rendered Animation" }
            ],
            tags: ["Blender", "Texturing"]
        }
    ];

    /*
       Checks if we navigated here from the Home page with a specific project ID.
       If so, that project's modal opens automatically on load.
    */
    const [selectedProject, setSelectedProject] = useState(() => {
        if (location.state?.openProjectId) {
            return projectData.find(p => p.id === location.state.openProjectId) || null;
        }
        return null;
    });

    return (
        <>
        <section className="projects-container">
            <div className="static-stars-bg"></div>

            <div className="projects-header">
                <h1 className="projects-title">Project Archive</h1>
            </div>

            {/* Main Projects Grid */}
            <div className="projects-grid">
                {projectData.map((project, index) => (
                    <div 
                        key={index} 
                        className="project-card" 
                        onClick={() => setSelectedProject(project)}
                    >
                        <div className="project-image-wrapper">
                            <img src={project.thumbnail} alt={project.title} className="project-image" />
                        </div>
                        <div className="project-info">
                            <h3 className="project-name">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="project-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedProject(null)}>&times;</button>
                        
                        <div className="modal-body">
                            <div className="modal-text">
                                <h2 className="modal-title">{selectedProject.title}</h2>
                                <p className="modal-long-desc">{selectedProject.detailedDescription}</p>

                                {/* Dynamic Media Feed: Handles both Video and Images */}
                                <div className="modal-media-flow">
                                    {selectedProject.content.map((item, i) => (
                                        <div key={i} className="media-break-item">
                                            {item.type === "video" ? (
                                                <video 
                                                    src={item.url} 
                                                    controls 
                                                    className="break-media" 
                                                    muted 
                                                    playsInline
                                                />
                                            ) : (
                                                <img src={item.url} alt={item.caption} className="break-media" />
                                            )}
                                            {item.caption && <p className="media-caption">{item.caption}</p>}
                                        </div>
                                    ))}
                                </div>

                                <div className="modal-footer">
                                    <div className="modal-tags">
                                        {selectedProject.tags.map((tag, i) => (
                                            <span key={i} className="project-tag">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="modal-actions">
                                        {/* View Source Code Button: Only renders if a link exists */}
                                        {selectedProject.github && (
                                            <a 
                                                href={selectedProject.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="action-btn-main"
                                                style={{ textDecoration: 'none', display: 'inline-block' }}
                                            >
                                                View Source Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
        <Footer />
        </>
    );
}