import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = ({ resume }) => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-350 mx-auto px-4">
                    <div className="flex justify-center">
                        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-green-200 to-green-600 bg-clip-text text-transparent text-center">
                            Projects
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resume.projects.map((project, key) => (
                            <div
                                key={key}
                                className="flex flex-col p-0 rounded-xl border border-white/10 hover:shadow-[0_2px_8px_rgba(255,255,255,0.2)] transition overflow-hidden"
                            >
                                <img
                                    src={`${import.meta.env.BASE_URL}/projects/${project.image ? project.image : 'project.gif'}`}
                                    alt={project.name}
                                    className="w-full h-48 object-cover"
                                />
                                

                                <div className="p-6 hover:-translate-y-1 transition-all">
                                    <a 
                                        className="text-2xl text-bold mb-2 cursor-pointer capitalize text-gray-400"
                                        href={project.link}
                                        target="_blank"
                                    >
                                        {project.name}
                                    </a>
                                    <p className="text-sm font-light text-gray-100 mb-4">
                                        {project.description}
                                    </p>
                                    <p className={`text-xs font-light mb-2 ${project.status === "defunct" ? "text-gray-600" : "text-gray-300"}`}>
                                        {project.start_date}{project.end_date ? " - " + project.end_date : ""} ({project.status})
                                    </p>
                                </div>
                                
                                <div className="mt-auto mb-4 md:mb-6 text-green-500 hover:text-green-300 transition-colors mx-6">
                                    { project.link 
                                    ? 
                                        <a href={project.link}>
                                            View Project →
                                        </a>
                                    :
                                        <a href="#contact">
                                            Contact me for more details ↓
                                        </a>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
};