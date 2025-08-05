import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { loadResume } from "./components/ResumeLoader";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [resume, setResume] = useState(null);
	const [brand, setBrand] = useState(null);
	const [activeSection, setActiveSection] = useState(null);

	useEffect(() => {
		const data = loadResume();
		setResume(data);
	}, []);

	console.log("PRINT THIS");
	console.log(import.meta.env.VITE_SERVICE_ID);
    console.log(import.meta.env.VITE_TEMPLATE_ID);
    console.log(import.meta.env.VITE_PUBLIC_KEY);

	useEffect(() => {
		if (resume) {
			const parts = resume.personal_info.name.trim().split(" ");

			const first = parts[0]?.toLowerCase() || "";
			const initials = parts.slice(1).map(name => name[0].toLowerCase()).join("")

			const title = initials ? `${first}.${initials}` : first;
			setBrand(title);

			document.title = title
		}
	}, [resume]);

	useEffect(() => {
		if (!isLoaded) return;

		const sections = document.querySelectorAll("section[id]");

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
						break;
					}
				}
			},
			{
				threshold: 0.2,
				// rootMargin: "-20% 0px -50% 0px",
			}
		);

		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, [isLoaded]);

	if (!resume || !isLoaded) return (
		<>
			<LoadingScreen onComplete={() => setIsLoaded(true)} />
		</>
	);

	return (
		<>
			<div className="min-h-screen transition-opacity duration-700 bg-black text-gray-100">
				<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} brand={brand} activeSection={activeSection} />
				<MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				<Home resume={resume} />
				<About resume={resume} />
				<Projects resume={resume} />
				<Contact />
			</div>
		</>
	);
}

export default App;
