import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

export default function App() {
	return (
		<Router>
			<ScrollToTop />
			<Navbar />
			<Routes>
				<Route path="/" element={<Hero />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/experience" element={<Experience />} />
			</Routes>
		</Router>
	);
}
