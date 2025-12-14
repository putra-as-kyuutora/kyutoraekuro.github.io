import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const mailtoLink = `mailto:putra.dvpr@gmail.com?subject=${encodeURIComponent(formData.subject + ' - dari ' + formData.name)}&body=${encodeURIComponent(`Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`)}`
        window.location.href = mailtoLink
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <section id="contact" className="contact">
            <div className="container">
                <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    Get In Touch
                </motion.h2>
                <motion.p className="section-subtitle" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                    Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi saya!
                </motion.p>

                <div className="contact-content">
                    <motion.div className="contact-info" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <h3>Contact Information</h3>

                        <div className="contact-item">
                            <FaEnvelope />
                            <div>
                                <h4>Email</h4>
                                <a href="mailto:putra.dvpr@gmail.com">putra.dvpr@gmail.com</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <FaWhatsapp />
                            <div>
                                <h4>WhatsApp</h4>
                                <a href="https://wa.me/6283178579534" target="_blank" rel="noopener noreferrer">+62 831-7857-9534</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <FaMapMarkerAlt />
                            <div>
                                <h4>Location</h4>
                                <p>Pemalang, Jawa Tengah, Indonesia</p>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com/putra-as-kyuutora/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com/in/eka-putra" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaLinkedin />
                            </a>
                            <a href="https://instagram.com/kyuuto_san" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaInstagram />
                            </a>
                        </div>
                    </motion.div>

                    <motion.form className="contact-form" onSubmit={handleSubmit} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <div className="form-group">
                            <label htmlFor="name">Nama</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Nama Anda" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="email@example.com" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subjek</label>
                            <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                                <option value="">Pilih subjek...</option>
                                <option value="Kolaborasi Project">Kolaborasi Project</option>
                                <option value="Konsultasi">Konsultasi</option>
                                <option value="Academic Inquiry">Academic Inquiry</option>
                                <option value="Lainnya">Lainnya</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Pesan</label>
                            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required placeholder="Tulis pesan Anda..." />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            <span>Kirim Pesan</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}

export default Contact
