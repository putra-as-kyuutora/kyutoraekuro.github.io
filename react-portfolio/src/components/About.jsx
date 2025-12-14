import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaJava, FaPython, FaDatabase, FaCode } from 'react-icons/fa'
import './About.css'

const About = () => {
    const skills = [
        { name: 'Java', progress: 85, icon: FaJava, color: '#f89820' },
        { name: 'Python', progress: 70, icon: FaPython, color: '#3776ab' },
        { name: 'Oracle DB', progress: 75, icon: FaDatabase, color: '#f80000' },
        { name: 'HTML/CSS', progress: 80, icon: FaCode, color: '#e34f26' },
    ]

    return (
        <section id="about" className="about">
            <div className="container">
                <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    About Me
                </motion.h2>

                <div className="about-content">
                    <motion.div className="about-text" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <p className="about-intro">
                            Halo! Saya <strong>Eka Alssah Putra</strong>, biasa dipanggil <strong>Putra</strong> atau <strong>Kyuutora</strong>.
                            Saya mahasiswa Informatika berusia 19 tahun dari Pemalang, Jawa Tengah yang passionate dalam pengembangan aplikasi dan game.
                        </p>
                        <p>
                            Dengan fokus pada <strong>Java development</strong>, saya telah mengembangkan berbagai aplikasi seperti
                            Point of Sale System (POSS) dan Enigma Simulator. Saya percaya bahwa kode yang baik adalah kode yang
                            dapat menyelesaikan masalah nyata dengan efisien dan elegan.
                        </p>
                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number gradient-text">5+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number gradient-text">2+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number gradient-text">100%</span>
                                <span className="stat-label">Commitment</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="skills-container" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <h3 className="skills-title">Tech Stack</h3>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <SkillCard key={skill.name} skill={skill} index={index} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const SkillCard = ({ skill, index }) => {
    const progressRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && progressRef.current) {
                progressRef.current.style.width = `${skill.progress}%`
            }
        }, { threshold: 0.5 })

        if (progressRef.current) {
            observer.observe(progressRef.current.parentElement)
        }

        return () => observer.disconnect()
    }, [skill.progress])

    const Icon = skill.icon

    return (
        <motion.div className="skill-card" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} whileHover={{ y: -4 }}>
            <div className="skill-icon" style={{ background: `${skill.color}1a`, color: skill.color }}>
                <Icon size={32} />
            </div>
            <div className="skill-info">
                <h4>{skill.name}</h4>
                <div className="skill-bar">
                    <div ref={progressRef} className="skill-progress" />
                </div>
            </div>
        </motion.div>
    )
}

export default About
