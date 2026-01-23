import { FiMail, FiGithub, FiLinkedin, FiHeart, FiCode } from 'react-icons/fi';
import { personalInfo, navLinks } from '../../data/constants';
import styles from './Contact.module.css';

const Contact = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section className={`section ${styles.contact}`} id="contact">
            <div className="container">
                <div className={styles.content}>
                    <h2>Let's Connect</h2>
                    <p>
                        I'm always open to discussing backend engineering opportunities,
                        system design challenges, or collaboration on interesting projects.
                        Whether you're a recruiter, fellow developer, or just curious about my work—reach out!
                    </p>

                    <div className={styles.links}>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className={styles.link}
                        >
                            <FiMail size={20} />
                            {personalInfo.email}
                        </a>
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            <FiGithub size={20} />
                            GitHub
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            <FiLinkedin size={20} />
                            LinkedIn
                        </a>
                    </div>
                </div>

                <footer className={styles.footer}>
                    <div className={styles.footerContent}>
                        <div className={styles.footerLogo}>
                            <span>Sri Charan</span>
                        </div>

                        <nav className={styles.footerNav}>
                            {navLinks.map((link, index) => (
                                <a key={index} href={link.href}>{link.name}</a>
                            ))}
                        </nav>

                        <div className={styles.footerSocial}>
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialIcon}
                                aria-label="GitHub"
                            >
                                <FiGithub size={18} />
                            </a>
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialIcon}
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin size={18} />
                            </a>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className={styles.socialIcon}
                                aria-label="Email"
                            >
                                <FiMail size={18} />
                            </a>
                        </div>

                        <div className={styles.footerDivider}></div>

                        <div className={styles.footerBottom}>
                            <p className={styles.footerText}>
                                © {currentYear} <span>{personalInfo.name}</span>
                            </p>
                            <p className={styles.techStack}>
                                Built with <FiHeart size={12} /> using React & Vite
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
