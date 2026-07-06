import { motion } from 'motion/react'
import { GraduationCap, School } from 'lucide-react'

const Education = () => {
  const educationList = [
    {
      icon: School,
      degree: 'Higher Secondary Certificate (HSC)',
      institute: 'Jashore Government College',
      duration: '2021 - 2023',
      status: 'Completed',
      description: 'Humanity',
    },
    {
      icon: GraduationCap,
      degree: 'B.Sc in Geography',
      institute: 'National University',
      duration: '2023 - Present',
      status: 'Ongoing',
      description: "I am currently studying for a bachelor's degree in Geography.",
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
        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="text-primary font-medium mb-2 tracking-wide text-sm uppercase">
            My Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-3">
            Education
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
        </div>

        {/* দুইটা card পাশাপাশি — flex দিয়ে */}
        <div className="flex flex-col md:flex-row gap-6">
          {educationList.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="flex-1 bg-base-200/40 border border-base-300 rounded-2xl p-7 hover:border-primary/40 hover:shadow-md transition-all"
            >
              {/* Icon + Status badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="text-primary" size={22} />
                </div>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    item.status === 'Ongoing'
                      ? 'bg-primary/10 text-primary'
                      : 'bg-base-300 text-base-content/70'
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-base-content mb-1">
                {item.degree}
              </h3>
              <p className="text-sm text-primary font-medium mb-1">
                {item.institute}
              </p>
              <p className="text-xs text-base-content/50 mb-4">
                {item.duration}
              </p>
              <p className="text-sm text-base-content/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Education