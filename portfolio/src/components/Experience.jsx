import "../Styles/Experience.css";
import Footer from "./Footer.jsx";
export default function Experience() {
    // Array of objects containing work history. 
    // This makes it easy to add or update experience in one place.
    const missions = [
        {
            title: "Game Design Intern",
            org: "Sports Media Inc",
            location: "Denver, CO",
            date: "Jun 2025 – Aug 2025",
            details: [
                "Contributed to the development of a specialized training simulator.",
                "Collaborated with a multidisciplinary team of engineers, designers, and artists to integrate features and improve user experience using Git.",
                "Designed and implemented an interactive main menu interface using Unreal Engine 4.",
                "Programmed gameplay systems using C++ and visual scripting."
            ],
            skills: ["C++", "Unreal Engine 4", "Blueprints", "Git", "UX Design"]
        },
        {
            title: "Research Assistant",
            org: "SUNY Polytechnic Institute",
            location: "Utica, NY",
            date: "Feb 2024 – May 2025",
            details: [
                "Facilitated VR equipment setup for optimal functionality and user experience.",
                "Translated designs from CAD software into game engine compatible formats.",
                "Leveraged C# and Unity to create functional, user-friendly simulations."
            ],
            skills: ["Unity", "C#", "VR/AR", "CAD Integration", "Optimization"]
        },
        {
            title: "Associate",
            org: "Panera Bread",
            location: "Malta, NY",
            date: "Aug 2022 - Present",
            details: [
                "Trained team members and managed inventory restocking.",
            ],
            skills: ["Team Training"]
        },
        {
            title: "Corps Member",
            org: "AmeriCorps NCCC",
            location: "Denver, CO",
            date: "Nov 2021 – Aug 2022",
            details: [
                "Tackled food insecurity with The Food Bank for Central & Northeast Missouri.",
                "Worked as a teacher for the Liberty Village school on Fort Dix, where I helped teach Afghan refugees the American school system and various subjects.",
                "Headed donations for the Colorado Afghan resettlement program and assisted Team Rubicon with relocations.",
                "Constructed over 2 miles of hiking trails for the Missouri Dept. of Natural Resources."
            ],
            skills: ["Leadership", "Community Outreach", "Crisis Management", "Logistics"]
        },
    ];

    return (
        <>
        <section className="experience-container">
            <div className="experience-header">
                <h1 className="experience-title">Mission Log</h1>
                <p className="experience-subtitle">
                    A record of experience.
                </p>
            </div>

            {/* Timeline Layout */}
            <div className="mission-log">
                {/* Mapping through the missions array to render each entry.*/}
                {missions.map((mission, index) => (
                    <div key={index} className="mission-entry">
                        {/* The visual timeline marker*/}
                        <div className="mission-marker" />
                        
                        <div className="mission-content">
                            <h3 className="mission-title">{mission.title}</h3>
                            <p className="mission-meta">
                                {mission.org} · {mission.location} · {mission.date}
                            </p>
                            
                            {/* Inner map for the bullet points of each job */}
                            <ul className="mission-details">
                                {mission.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>

                            {/* Tech stack/skill badges for the specific role */}
                            <div className="mission-skills">
                                {mission.skills.map((skill, i) => (
                                    <span key={i} className="skill-badge">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        <Footer />
        </>
    );
}