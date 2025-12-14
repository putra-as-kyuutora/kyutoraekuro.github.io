import './Footer.css'

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' })
        }
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-logo gradient-text">Kyuutora</h3>
                        <p>Building robust applications with passion and precision.</p>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
                            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
                            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
                            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Connect</h4>
                        <ul className="footer-links">
                            <li><a href="https://github.com/putra-as-kyuutora/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            <li><a href="https://linkedin.com/in/eka-putra" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://instagram.com/kyuuto_san" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 Eka Alssah Putra. Made with ❤️ and lots of ☕</p>
                    <p className="footer-tech">Built with React ⚛️ & Vite ⚡</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
