import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
    const [typedText, setTypedText] = useState('')
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    const phrases = ['Java Developer', 'Game Developer', 'Problem Solver', 'Tech Enthusiast']

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex]
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (typedText.length < currentPhrase.length) {
                    setTypedText(currentPhrase.substring(0, typedText.length + 1))
                } else {
                    setTimeout(() => setIsDeleting(true), 2000)
                }
            } else {
                if (typedText.length > 0) {
                    setTypedText(currentPhrase.substring(0, typedText.length - 1))
                } else {
                    setIsDeleting(false)
                    setPhraseIndex((prev) => (prev + 1) % phrases.length)
                }
            }
        }, isDeleting ? 50 : 150)

        return () => clearTimeout(timeout)
    }, [typedText, isDeleting, phraseIndex])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' })
        }
    }

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <motion.div className="gradient-orb orb-1" animate={{ x: [0, 30, -20, 20, 0], y: [0, -30, 20, 30, 0], scale: [1, 1.1, 0.9, 1.05, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} />
                <motion.div className="gradient-orb orb-2" animate={{ x: [0, -30, 20, -20, 0], y: [0, 30, -20, 30, 0], scale: [1, 0.9, 1.1, 0.95, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 7 }} />
                <motion.div className="gradient-orb orb-3" animate={{ x: [0, 20, -30, 10, 0], y: [0, -20, 30, -10, 0], scale: [1, 1.05, 0.95, 1.1, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 14 }} />
            </div>

            <div className="container hero-container">
                <motion.div className="hero-content" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">Eka Putra</span>
                    </h1>
                    <div className="hero-subtitle">
                        <span className="typing-text">{typedText}</span>
                        <span className="cursor">|</span>
                    </div>
                    <p className="hero-description">
                        Building robust applications with Java | POSS & Game Development Enthusiast
                    </p>
                    <div className="hero-cta">
                        <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                            <span>View Projects</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                            <span>Contact Me</span>
                        </button>
                    </div>
                </motion.div>

                <motion.div className="hero-image" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                    <div className="profile-card">
                        <motion.div
                            className="profile-image-wrapper"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="profile-image">
                                <img src="/images/profile.jpg" alt="Eka Putra" className="profile-photo" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <motion.div className="scroll-indicator" animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <span>Scroll Down</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </motion.div>
        </section>
    )
}

export default Hero
