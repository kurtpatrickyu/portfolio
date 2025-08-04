import { useEffect, useState } from "react"

const navItems = [
	{ name: "home", href: "#home"},
	{ name: "about", href: "#about"},
	{ name: "projects", href: "#projects"},
	{ name: "contact", href: "#contact"},
]

export const Navbar = ({ menuOpen, setMenuOpen, brand, activeSection }) => {
	const [first, setFirst] = useState(null);
	const [extension, setExtension] = useState(null);
	useEffect(() => {
		document.body.style.overflow = menuOpen = menuOpen ? "hidden" : ""
	}, [menuOpen]);

	useEffect(() => {
		const brandName = brand.trim().split(".");
		setFirst(brandName[0]?.toLowerCase() || "");
		setExtension(`.${brandName[1]?.toLowerCase()}` || "");
	}, [brand]);

	return (
		<nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
			<div className="max-w-5xl mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<a href="#home" className="text-xl font-bold text-white">
						{first}<span className="text-green-300">{extension}</span>
					</a>

					<div
						className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
						onClick={() => setMenuOpen((prev) => !prev)}
					>
						&#9776;
					</div>

					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((navItem) => 
							<a
								key={navItem.name}
								href={navItem.href}
								className={`capitalize hover:text-white transition-colors ${
											activeSection === navItem.name
											? "text-gray-400 font-bold"
											: "text-gray-500"
								}`}
							>
								{navItem.name}
							</a>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}