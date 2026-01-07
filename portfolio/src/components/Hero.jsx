import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Hero.css";
import Footer from "./Footer.jsx";

// Assets for project thumbnails
import milksongThumb from "../assets/img/portfolio/milksong/title.png";
import sortingThumb from "../assets/img/portfolio/AlgorithmDemo.png";
import zombieThumb from "../assets/img/portfolio/ZombieCafePic.png";

// These functions handle the math for the 3D star warp effect on the canvas.
function createStars(count, width, height) {
    const stars = [];
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * width - width / 2,
            y: Math.random() * height - height / 2,
            z: Math.random() * width,
            size: Math.random() * 1.2 + 0.3,
            speed: Math.random() * 1.5 + 1.5
        });
    }
    return stars;
}

function drawStars(ctx, stars, width, height, update = true) {
    const cx = width / 2;
    const cy = height / 2;
    for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        if (update) {
            s.z -= s.speed;
            if (s.z <= 0) {
                s.z = Math.random() * width + width * 0.5;
                s.x = Math.random() * width - cx;
                s.y = Math.random() * height - cy;
            }
        }
        const k = 128 / s.z;
        const px = s.x * k + cx;
        const py = s.y * k + cy;
        const r = s.size * k;
        
        // Don't draw if the star is off-screen
        if (px < -50 || px > width + 50 || py < -50 || py > height + 50) continue;
        
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.fill();
    }
}

function drawNebula(ctx, width, height) {
    const clouds = [
        { x: 0.3, y: 0.4, r: 0.9, c1: "rgba(120,60,255,0.12)" },
        { x: 0.7, y: 0.6, r: 1.1, c1: "rgba(40,140,255,0.08)" }
    ];
    clouds.forEach(c => {
        const g = ctx.createRadialGradient(width * c.x, height * c.y, 0, width * c.x, height * c.y, width * c.r);
        g.addColorStop(0, c.c1);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);
    });
}

/* ================= HERO COMPONENT ================= */
export default function Hero() {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    // Featured projects data: Displaying a subset of my best work on the home page.
    const featuredProjects = [
        {
            id: "milksong",
            title: "Milksong",
            description: "A 2D action platformer built in C++ using Raylib. Features multiple upgrades and ranged combat systems.",
            image: milksongThumb,
            tags: ["C++", "Raylib", "ENTT"]
        },
        {
            id: "sorting-visualizer",
            title: "Sorting Algorithm Visualizer",
            description: "Interactive web app visualizing sorting logic with audio feedback and custom dataset imports.",
            image: sortingThumb,
            tags: ["JavaScript", "HTML", "CSS"]
        },
        {
            id: "zombie-cafe",
            title: "Zombie Cafe",
            description: "Unity management/defense game. Lead programmer for NPC recruitment and looting systems.",
            image: zombieThumb,
            tags: ["Unity", "C#", "Blender"]
        }
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let width = window.innerWidth;
        let height = window.innerHeight;
        
        // Initial canvas sizing
        canvas.width = width;
        canvas.height = height;
        const stars = createStars(2000, width, height);

        // Handling window resize to prevent canvas stretching
        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        // Pause animation when the user scrolls away to save CPU/GPU resources
        const handleScroll = () => {
            setIsPaused(window.scrollY >= height - 1);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        const animate = () => {
            ctx.fillStyle = "#05070c";
            ctx.fillRect(0, 0, width, height);
            drawNebula(ctx, width, height);
            drawStars(ctx, stars, width, height, !isPaused);
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup: Removing listeners and cancelling animation on unmount
        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isPaused]);

    return (
        <div className="home-wrapper">
            {/* Hero Banner with Canvas Starfield */}
            <section className="hero-container">
                <canvas ref={canvasRef} className="starfield" />
                <div className="hero-content">
                    <p className="intro">Hello, I’m</p>
                    <h1 className="name">Nicholas Decinto</h1>
                    <h2 className="subtitle">Software Developer / Game Designer</h2>

                    <Link to="/projects" className="cta-button">
                        View Projects
                    </Link>
                </div>
            </section>

            {/* Featured Projects Preview */}
            <section className="featured-projects">
                <div className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="projects-grid">
                    {featuredProjects.map((project, index) => (
                        <Link 
                            to="/projects" 
                            // Passing project ID via state to allow the Projects page to open the correct modal
                            state={{ openProjectId: project.id }} 
                            key={index} 
                            className="project-card-link"
                        >
                            <div className="project-card">
                                <div className="project-image-wrapper">
                                    <img src={project.image} alt={project.title} className="project-image" />
                                </div>
                                <div className="project-info">
                                    <h3 className="project-title-text">{project.title}</h3>
                                    <p className="project-summary">{project.description}</p>
                                    <div className="tech-stack">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="tech-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="view-more-container">
                    <Link to="/projects" className="view-more-link">
                        Explore Full Archive <span className="arrow">→</span>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}