import { motion, AnimatePresence } from 'motion/react'
import { FaGithub } from 'react-icons/fa'
import { X, ExternalLink, AlertTriangle, Lightbulb } from 'lucide-react'

// project prop null থাকলে modal কিছুই render করবে না (বন্ধ অবস্থা)
const ProjectModal = ({ project, onClose }) => {
    return (
        <AnimatePresence>

            {project && (

                <motion.div
                    // ব্যাকগ্রাউন্ড overlay — ক্লিক করলে modal বন্ধ হয়ে যাবে
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
                >
                    <motion.div
                        // Modal box এ ক্লিক করলে যেন বন্ধ না হয়ে যায়, তাই stopPropagation
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="bg-base-100 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-base-300 shadow-xl"
                    >
                        {/* Close button */}
                        <div className="sticky top-0 flex justify-end p-4 bg-base-100/90 backdrop-blur z-10">
                            <button
                                onClick={onClose}
                                aria-label="Close modal"
                                className="btn btn-circle btn-ghost btn-sm"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="px-6 md:px-8 pb-8 -mt-4">
                            {/* Project image */}
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-56 object-cover rounded-xl mb-6"
                            />

                            <h3 className="text-2xl font-bold text-base-content mb-4">
                                {project.name}
                            </h3>

                            {/* Tech stack */}
                            <div className="mb-5">
                                <p className="text-sm font-semibold text-base-content/60 uppercase tracking-wide mb-2">
                                    Tech Stack
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="badge badge-outline badge-primary">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-5">
                                <p className="text-sm font-semibold text-base-content/60 uppercase tracking-wide mb-2">
                                    Description
                                </p>
                                <p className="text-base-content/80 leading-relaxed text-sm">
                                    {project.description}
                                </p>
                            </div>

                            {/* Challenges */}
                            <div className="mb-5">
                                <p className="text-sm font-semibold text-base-content/60 uppercase tracking-wide mb-2 flex items-center gap-2">
                                    <AlertTriangle size={16} className="text-primary" />
                                    Challenges Faced
                                </p>
                                <p className="text-base-content/80 leading-relaxed text-sm">
                                    {project.challenges}
                                </p>
                            </div>

                            {/* Future plans */}
                            <div className="mb-6">
                                <p className="text-sm font-semibold text-base-content/60 uppercase tracking-wide mb-2 flex items-center gap-2">
                                    <Lightbulb size={16} className="text-primary" />
                                    Future Improvements
                                </p>
                                <p className="text-base-content/80 leading-relaxed text-sm">
                                    {project.futurePlans}
                                </p>
                            </div>

                            {/* Links */}
                            <div className="flex gap-3">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary flex-1 gap-2"
                                >
                                    <ExternalLink size={16} />
                                    Live Link
                                </a>

                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-primary flex-1 gap-2"
                                >
                                    <FaGithub size={16} />
                                    GitHub (Client)
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div >
            )
            }
        </AnimatePresence >
    )
}

export default ProjectModal