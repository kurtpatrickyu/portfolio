import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadingScreen } from "@/components/LoadingScreen";
import { loadResume } from "@/utils/loadResume";
import { Navbar } from "@/components/Navbar";
import { Home } from "@/components/sections/Home";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { formatName } from "@/utils/formatName";


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

	useEffect(() => {
		if (resume) {
			const { first, initials } = formatName(resume.personal_info.name);

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
				threshold: 0.2
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
				<Navbar 
					menuOpen={menuOpen} 
					setMenuOpen={setMenuOpen} 
					brand={brand} 
					activeSection={activeSection} 
				/>
				<Home resume={resume} />
				<About resume={resume} />
				<Projects resume={resume} />
				<Contact resume={resume}/>
				<ToastContainer 
					position="top-center"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop
					closeOnClick
					pauseOnHover
					draggable
					theme="dark"
				/>
			</div>
		</>
	);
}

export default App;
