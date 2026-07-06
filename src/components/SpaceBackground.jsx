import { motion } from 'motion/react'
import { useState } from 'react'

// Star generate করার logic আলাদা function এ রাখা হলো (আগের মতোই)
function generateStars(count) {
    return Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5,
    }))
}

function SpaceBackground() {
 
    const [stars] = useState(() => generateStars(120))

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-base-100 ">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-purple-800/5 to-transparent" />

            {stars.map((star) => (
                <motion.span
                    key={star.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                    }}
                    animate={{
                        opacity: [0.1, 0.5, 0.1],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: star.duration,
                        delay: star.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            <motion.div
                className="absolute w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"
                style={{ top: '20%', left: '10%' }}
                animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute w-80 h-80 rounded-full bg-purple-400/5 blur-3xl"
                style={{ bottom: '15%', right: '10%' }}
                animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[linear-gradient(transparent,rgba(147,51,234,0.03))]" />
        </div>
    )
}

export default SpaceBackground