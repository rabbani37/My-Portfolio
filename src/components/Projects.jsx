import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { projectsData } from '../data/projectsData'
import ProjectModal from './ProjectModal'

const Projects = () => {
 
    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <div className="max-w-6xl mx-auto py-24 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-center mb-6">
                    <p className="text-primary font-medium mb-2 tracking-wide text-sm uppercase">
                        My Work
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-3">
                        Projects
                    </h2>
                    <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
                </div>

                <p className="text-center text-base-content/70 max-w-xl mx-auto mb-14">
                    Here are some projects I have done, in which I have tried to solve problems using different technologies.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                           
                            className="group relative bg-base-200/40 border border-base-300 rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all"
                        >
                            <div className="relative overflow-hidden h-56 bg-base-300">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-310"
                                />

                                {/* Dark overlay — hover করলে ধীরে ধীরে দেখা যাবে */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    {/* Details বাটন — প্রথমে হালকা নিচে ও transparent থাকবে,
                      hover করলে উপরে উঠে সম্পূর্ণ visible হবে (smooth reveal) */}
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="btn btn-primary gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75"
                                    >
                                        View Details
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-base-content">
                                    {project.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Modal — page এর যেকোনো জায়গা থেকে trigger হলেও একবারই render হবে */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    )
}

export default Projects