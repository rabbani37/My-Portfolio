import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Phone, MessageCircle, Send } from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'mrabbbani08@gmail.com',
            link: 'mailto:mrabbbani08@gmail.com',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+880 1304844897',
            link: 'tel:+8801304844897',
        },
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            value: '+880 1304844897',
            link: 'https://wa.me/1304844897',
        },
    ]

    // Input পরিবর্তন হলে state আপডেট হবে
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // এখন শুধু console এ log করছে — backend/email service যোগ করলে
    // এই function এর ভেতরেই সেই API call বসানো হবে
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // TODO: EmailJS / backend API দিয়ে এখানে actual email পাঠানোর logic বসাবে
        alert('Message sent! (এখনো backend যুক্ত করা হয়নি)')
        setFormData({ name: '', email: '', message: '' })
    }

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
                        Get In Touch
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-3">
                        Contact Me
                    </h2>
                    <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* বাম পাশ — Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <p className="text-base-content/70 leading-relaxed mb-6">
                            Want to talk about a project, or just want to get in touch — you can reach out directly through any of the channels below. I try to respond quickly.
                        </p>

                        {contactInfo.map(({ icon: Icon, label, value, link }) =>
                            <a
                                key={label}
                                href={link}
                                target={label === 'WhatsApp' ? '_blank' : undefined}
                                rel={label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                                className="flex items-center gap-4 p-4 rounded-xl bg-base-200/40 border border-base-300 hover:border-primary/40 hover:shadow-md transition-all group">

                                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <Icon className="text-primary" size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-base-content/50 uppercase tracking-wide">
                                        {label}
                                    </p>
                                    <p className="text-sm font-medium text-base-content">
                                        {value}
                                    </p>
                                </div>
                            </a>
                        )
                        }
                    </motion.div>

                    {/* ডান পাশ — Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        onSubmit={handleSubmit}
                        className="bg-base-200/40 border border-base-300 rounded-2xl p-6 md:p-8 space-y-4"
                    >
                        <div>
                            <label className="text-sm font-medium text-base-content/80 mb-1 block">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-base-content/80 mb-1 block">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                required
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-base-content/80 mb-1 block">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message..."
                                required
                                rows={5}
                                className="textarea textarea-bordered w-full resize-none"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-full gap-2">
                            <Send size={18} />
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </motion.div>
        </div>
    )
}

export default Contact