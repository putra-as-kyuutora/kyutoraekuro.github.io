import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
    const projects = [
        {
            title: 'Magic Clipboard (Slipboard)',
            tags: ['JavaScript', 'Chrome Extension', 'Groq AI API'],
            image: null,
            problem: 'Workflow produktivitas sering terganggu karena harus berpindah tab hanya untuk bertanya hal simpel ke AI atau memproses teks dari clipboard.',
            solution: 'Chrome Extension ringan yang mengintegrasikan Groq API (LLaMA 3.1) untuk memproses konten clipboard secara instan. Memberikan jawaban cepat, padat, dan akurat langsung di browser tanpa latentcy.',
            learning: [
                'Browser Extension Architecture: Memahami Manifest V3, Service Workers, dan Content Scripts',
                'AI Integration: Mengonsumsi Groq API untuk inferensi LLM ultra-cepat',
                'Asynchronous Javascript: Mengelola message passing antar background script dan popup',
                'Chrome Storage API: Menyimpan history dan konfigurasi user secara lokal'
            ],
            features: [
                'Instant AI Response: Powered by LLaMA 3.1-8b-instant model',
                'Context Menu Integration: Proses teks terseleksi langsung via klik kanan',
                'Smart Clipboard: Analisis otomatis konten yang disalin',
                'High Performance: Response time sub-detik berkat Groq hardware acceleration'
            ]
        },
        {
            title: 'Bank Sigma ATM Simulation',
            tags: ['Java', 'Swing GUI', 'State Pattern'],
            image: '/images/atm-icon.png',
            problem: 'Mensimulasikan logika kompleks mesin ATM fisik ke dalam software standalone yang menangani user session, validasi PIN, dan kalkulasi saldo secara akurat tanpa database server.',
            solution: 'Mengembangkan aplikasi single-frame multi-panel dengan Java Swing yang menggunakan State State Object untuk navigasi antar layar (Login, Menu, Penarikan, Saldo) secara efisien.',
            learning: [
                'State Management: Mengelola transisi antar panel (Login > Menu > Transaksi) tanpa multiple JFrames',
                'Input Validation: Secure PIN masking dan validasi input numerik real-time',
                'Business Logic: Algoritma kalkulasi saldo dan pecah uang (denomination logic)',
                'User Experience: Simulasi interaksi fisik ATM melalui software interface'
            ],
            features: [
                'Multi-State Interface: Single window dengan panel yang berganti dinamis',
                'Secure Authentication: Validasi PIN nasabah dengan masking character',
                'Dynamic Receipt: Generate resi transaksi dengan timestamp unik',
                'Balance Handling: Kalkulasi real-time saldo nasabah pasca penarikan'
            ]
        },
        {
            title: 'Kafe Genzigma POS (Point of Sale)',
            tags: ['Java', 'MySQL', 'JDBC', 'Swing GUI'],
            image: null,
            problem: 'Operasional kafe sering terkendala kesalahan pencatatan manual, kesulitan tracking riwayat transaksi, dan ketidakpastian stok yang menghambat efisiensi layanan.',
            solution: 'Membangun aplikasi desktop Java native yang robust dengan database MySQL. Mengimplementasikan ACID-compliant transaction handling untuk integritas data dan fitur auto-generate struk digital.',
            impact: [
                'Eliminasi kesalahan hitung manual dengan sistem kalkulasi atomik',
                'Penyimpanan riwayat transaksi digital yang terstruktur rapi',
                'Efisiensi pencetakan struk transaksi otomatis ke format .txt dan preview HTML'
            ],
            features: [
                'Robust Transaction Handling: Implementasi commit/rollback database transactions',
                'Dual-Format Receipt: Preview struk HTML interactive & export file .txt otomatis',
                'Batch Processing: Penyimpanan detail transaksi menggunakan JDBC Batch updates',
                'Dynamic Reporting: Melihat ulang detail transaksi historis dengan nota lengkap'
            ]
        },
        {
            title: 'Enigma Machine Simulator',
            tags: ['Java', 'Swing GUI', 'Algorithms', 'Design Patterns'],
            image: '/images/enigma-icon.png',
            problem: 'Memahami kompleksitas enkripsi mesin Enigma PD II yang melibatkan permutasi rotor dinamis dan plugboard connections tanpa alat visual yang interaktif.',
            solution: 'Simulasi software akurat yang mereplikasi mekanisme elektromekanik Enigma. Dibuat dengan Java Swing untuk visualisasi path enkripsi karakter per karakter secara real-time.',
            learning: [
                'Cryptographic Logic: Implementasi algoritma substitusi polialfabetik yang otentik',
                'State Pattern: Mengelola state kompleks dari rotasi rotor dan konfigurasi plugboard',
                'Event-Driven Programming: Handling user input keystrokes simulasi mesin ketik nyata',
                'Launch4j Wrapper: Executable native Windows untuk kemudahan distribusi'
            ],
            features: [
                'Authentic Rotor Mechanism: Simulasi pergerakan stepping rotor yang akurat',
                'Plugboard Configuration: Kustomisasi wiring enkripsi karakter swap',
                'Interactive Lampboard: Visualisasi output enkripsi dengan lampu menyala',
                'Safe Swing Threading: Penggunaan SwingWorker untuk operasi berat'
            ]
        }
    ]

    return (
        <section id="projects" className="projects">
            <div className="container">
                <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    Featured Projects
                </motion.h2>
                <motion.p className="section-subtitle" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                    Case studies showcasing problem-solving approach and technical implementation
                </motion.p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}

                    <motion.div className="project-card more-projects" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
                        <div className="more-projects-content">
                            <FaGithub size={80} className="github-icon" />
                            <h3>More Projects on GitHub</h3>
                            <p>Explore lebih banyak project dan experiment di repository GitHub saya</p>
                            <a href="https://github.com/putra-as-kyuutora/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <span>Visit GitHub</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div className="project-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} whileHover={{ y: -8 }}>
            <div className="project-image">
                {project.image && (
                    <img src={project.image} alt={project.title} className="project-thumbnail-img" />
                )}
                <div className="project-overlay">
                    <a href="https://github.com/putra-as-kyuutora/" target="_blank" rel="noopener noreferrer" className="btn btn-small">
                        View on GitHub
                    </a>
                </div>
            </div>

            <div className="project-content">
                <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-tags">
                        {project.tags.map(tag => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="project-description">
                    <div className="case-study">
                        <h4>🎯 Problem</h4>
                        <p>{project.problem}</p>

                        <h4>💡 Solution</h4>
                        <p>{project.solution}</p>

                        {project.impact && (
                            <>
                                <h4>📊 Impact</h4>
                                <ul>
                                    {project.impact.map((item, i) => (
                                        <li key={i}><strong>{item.split(':')[0]}:</strong> {item.split(':')[1] || item}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {project.learning && (
                            <>
                                <h4>📚 Learning Outcomes</h4>
                                <ul>
                                    {project.learning.map((item, i) => (
                                        <li key={i}><strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        <h4>🔧 Key Features</h4>
                        <ul>
                            {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects
