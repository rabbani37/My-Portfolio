import { motion } from 'motion/react'
import SocialLinks from './Social_Icon';
import { Download } from 'lucide-react';


const Hero = () => {


    return (
        <div className="pt-5">


            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-20 max-w-5xl w-full">

                    {/* Left size Text content */}
                    <motion.div
                        className="text-center lg:text-left flex-1"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <p className="text-primary font-medium mb-2 text-lg">
                            Hi, I'm
                        </p>

                        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-base-content">
                            𝗚ᴏʟᴀᴍ 𝗥𝗔𝗕𝗕𝗔𝗡𝗜
                        </h1>

                        {/*  requirement main part */}
                        <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-4">
                            Full Stack Developer
                        </h2>

                        <p className="text-base-content/70 max-w-md mx-auto lg:mx-0 mb-6">
                           I love building web applications — using React, Node.js, and modern tools to create beautiful and functional products.
                        </p>

                        <div className="flex gap-4 justify-center lg:justify-start">
                            <a href="#projects" className="btn btn-primary">
                                View Projects
                            </a>
                            <a href="/resume.pdf" download className="btn btn-outline btn-primary">
                                 Resume <Download />
                            </a>
                        </div>

                        <SocialLinks></SocialLinks>


                    </motion.div>

                    {/*Professional Photo */}
                    <motion.div
                        className="shrink-0"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    >
                        <div className="relative">
                            
                            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-110" />

                            <img
                                src="/profile2.png"
                                alt="Your Name - Full Stack Developer"
                                className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-primary/40 shadow-lg"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>


        </div>
    );
};

export default Hero;