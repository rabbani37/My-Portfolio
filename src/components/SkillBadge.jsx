import { motion } from 'motion/react'
import {
  SiHtml5, SiTailwindcss, SiJavascript, SiReact, SiNextdotjs,
  SiFramer, SiDaisyui, SiMui,
  SiTypescript, SiNodedotjs, SiMongodb, SiPostgresql, SiPrisma, SiExpress,
  SiGithub, SiPostman,
  SiNetlify, SiVercel,
} from 'react-icons/si'
import { Layers, Server } from 'lucide-react'

const SkillBadge = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'HeroUI', icon: Layers, color: '#8B5CF6' },
        { name: 'shadcn/ui', icon: Layers, color: '#8B5CF6' },
        { name: 'Motion', icon: SiFramer, color: '#0055FF' },
        { name: 'DaisyUI', icon: SiDaisyui, color: '#5A0EF8' },
        { name: 'Material UI', icon: SiMui, color: '#007FFF' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
        { name: 'REST API', icon: Server, color: '#F59E0B' },
      ],
    },
    {
      title: 'Tools & Deployment',
      skills: [
        { name: 'GitHub', icon: SiGithub, color: '#181717' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
        { name: 'Vercel', icon: SiVercel, color: '#000000' },
      ],
    },
  ]

  return (
    <div className="max-w-5xl mx-auto py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-14">
          <p className="text-primary font-medium mb-2 tracking-wide text-sm uppercase">
            What I Work With
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-3">
            My Skills
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
        </div>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold text-base-content mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {category.skills.map(({ name, icon: Icon, color }) => (
                  <motion.div
                    key={name}
                    whileHover={{ y: -6, scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-base-100 border border-base-300 shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
                  >
                    <Icon size={32} style={{ color }} />
                    <span className="text-xs font-medium text-base-content/70 text-center">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default SkillBadge