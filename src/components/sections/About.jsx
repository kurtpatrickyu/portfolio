import { RevealOnScroll } from "../RevealOnScroll";

export const About = ({ resume }) => {
    return (
        <section
            id="about"
            className="min-h-screen flex justify-center px-5 py-20"
        >
            <RevealOnScroll>
                <div className="flex justify-center break-inside-avoid">
                    <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-green-200 to-green-600 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>
                </div>
                <div className="max-w-350 mx-auto my-auto columns-1 md:columns-2 gap-6">
                    <div className="p-6 mb-6 rounded-xl border-white/10 border hover:shadow-[0_2px_8px_rgba(255,255,255,0.2)] transition break-inside-avoid">
                        <h2 className="text-3xl font-bold text-gray-300 mb-6 text-center">
                            Skills
                        </h2>
                        {/* <p className="text-gray-300 mb-6 text-center">
                                This is all about me.
                                You can see probably my work experience.
                            </p> */}

                        <div className="grid grid-cols-1 md:grid-cols-3">
                            {Object.entries(resume.skills).map(([category, tools]) => (
                                <div
                                    key={category}
                                    className="rounded-xl p-2 hover:-translate-y-1 transition-all"
                                >
                                    <h3 className="text-xl mb-2 capitalize cursor-default">
                                        {category.replace(/_/g, ' ')}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {tools.map((tool) => (
                                            <span
                                                key={tool}
                                                className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm cursor-default
                                            hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(86,224,58,0.2)] transition"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 mb-6 rounded-xl border-white/10 border hover:shadow-[0_2px_8px_rgba(255,255,255,0.2)] transition break-inside-avoid">
                        <h3 className="text-3xl font-bold text-gray-300 mb-6 text-center">
                            Education
                        </h3>
                        <ul>
                            {resume.education.map((education) => (
                                <li
                                    key={education.school}
                                    className="text-8xl font-bold mb-2 hover:-translate-y-1 transition-all py-4"
                                >
                                    <h3 className="text-2xl text-bold text-gray-400">{education.school}</h3>
                                    <p className="text-sm font-light text-gray-100">
                                        {
                                            education.degree
                                                ? `${education.degree} - ${education.graduation_year}`
                                                : `Graduated ${education.graduation_year}`
                                        }
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-6 mb-6 rounded-xl border-white/10 border hover:shadow-[0_2px_8px_rgba(255,255,255,0.2)] transition break-inside-avoid">
                        <h3 className="text-3xl font-bold text-gray-300 mb-6 text-center">
                            Work Experience
                        </h3>
                        <ul>
                            {resume.experience.map((experience) => (
                                <li
                                    key={experience.start_date}
                                    className="mb-2 hover:-translate-y-1 transition-all py-4"
                                >
                                    <h3 className="text-2xl font-bold text-gray-400">{experience.job_title}</h3>
                                    <a 
                                        className="text-lg text-gray-300 hover:text-white"
                                        href={experience.link}
                                    >
                                        {experience.company}
                                    </a>
                                    <span className="text-xs font-thin text-gray-300"> ({experience.start_date} - {experience.end_date})</span>
                                    <ul className="list-disc list-outside text-gray-400 space-y-2">
                                        {experience.responsibilities.map((responsibility, key) =>
                                            <li 
                                                key={key}
                                                className="text-sm"
                                            >
                                                {responsibility}
                                            </li>
                                        )}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
            </RevealOnScroll>
        </section>
    );
};