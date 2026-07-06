import { motion } from 'motion/react'

function About() {
    return (
        <div className="max-w-5xl mx-auto py-24 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                {/* Section heading */}
                <div className="text-center mb-14">
                    <p className="text-primary font-medium mb-2 tracking-wide text-sm uppercase">
                        Get To Know
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-3">
                        About Me
                    </h2>
                    <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
                </div>

                {/* Image + Text — দুই কলামে পাশাপাশি */}
                <div className="grid md:grid-cols-2 gap-7 md:gap-14 items-center">

                    {/* বাম পাশ — ছবি */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center md:justify-start"
                    >
                        <div className="relative">
                            {/* subtle glow, theme অনুযায়ী color বদলাবে */}
                            <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl scale-105" />
                            <img
                                src="/photo2.png"
                                alt="About Your Name"
                                className="relative w-72 h-80 md:w-80 md:h-96 object-cover rounded-2xl border border-base-300 shadow-md"
                            />
                        </div>
                    </motion.div>

                    {/* ডান পাশ — লেখা */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-5"
                    >
                        <p className="text-base-content/80 leading-relaxed text-base md:text-lg">
                            Hi, I'm <span className="text-primary font-semibold">Golam Rabbani</span> 👋
                            I'm a Full-Stack Web Developer specializing in the MERN stack and
                            Next.js. Over the past 1-2 years, I've worked hands-on across
                            projects of varying scale — from small builds to real-world
                            applications.
                        </p>

                        <p className="text-base-content/80 leading-relaxed text-base md:text-lg">
                            I enjoy building clean, scalable frontends with React and
                            TypeScript, and designing reliable backend APIs with Node.js and
                            MongoDB. To me, good code isn't just functional — it's clean,
                            maintainable, and user-friendly.
                        </p>

                        <p className="text-base-content/80 leading-relaxed text-base md:text-lg">
                            I'm currently looking for opportunities to join a team where I
                            can keep learning, sharpen my skills, and contribute to
                            meaningful products.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default About