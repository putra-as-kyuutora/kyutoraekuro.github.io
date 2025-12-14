import { motion } from 'framer-motion'
import './Experience.css'

const Experience = () => {
    const timeline = [
        {
            date: '2024 - Present',
            title: 'Mahasiswa Informatika',
            location: 'Universitas',
            description: 'Fokus pada pengembangan aplikasi berbasis Java, database management, dan game development. Aktif mengembangkan project untuk meningkatkan skill programming dan problem-solving.'
        },
        {
            date: '2023',
            title: 'Internship - IT Support',
            location: 'Ok Komputer',
            description: 'Pengalaman magang selama periode SMK, belajar tentang troubleshooting hardware/software, customer service, dan sistem informasi bisnis.'
        },
        {
            date: '2021 - 2024',
            title: 'SMK - Teknik Komputer & Jaringan',
            location: 'Pemalang, Jawa Tengah',
            description: 'Fondasi awal dalam dunia IT dan programming. Mulai belajar Java, database, dan networking fundamentals.'
        }
    ]

    return (
        <section id="experience" className="experience">
            <div className="container">
                <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    Experience & Education
                </motion.h2>

                <div className="timeline">
                    {timeline.map((item, index) => (
                        <motion.div key={index} className="timeline-item" initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} whileHover={{ x: 8 }}>
                            <div className="timeline-dot" />
                            <div className="timeline-content">
                                <span className="timeline-date">{item.date}</span>
                                <h3>{item.title}</h3>
                                <p className="timeline-location">{item.location}</p>
                                <p>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
