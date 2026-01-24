import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiHeart, FiCode } from 'react-icons/fi';
import { personalInfo, navLinks } from '../../data/constants';
import styles from './Contact.module.css';

const Contact = () => {
    const currentYear = new Date().getFullYear();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section className={`section ${styles.contact}`} id="contact">
            <div className="container">
                <motion.div
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2 variants={itemVariants}>Let's Connect</motion.h2>
                    <motion.p variants={itemVariants}>
                        I'm always open to discussing backend engineering opportunities,
                        system design challenges, or collaboration on interesting projects.
                        Whether you're a recruiter, fellow developer, or just curious about my work—reach out!
                    </motion.p>

                    <motion.div className={styles.links} variants={itemVariants}>
                        <motion.a
                            href={`mailto:${personalInfo.email}`}
                            className={styles.link}
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiMail size={20} />
                            {personalInfo.email}
                        </motion.a>
                        <motion.a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiGithub size={20} />
                            GitHub
                        </motion.a>
                        <motion.a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiLinkedin size={20} />
                            LinkedIn
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.footer
                    className={styles.footer}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className={styles.footerContent}>
                        <div className={styles.footerLogo}>
                            <span>Sri Charan</span>
                        </div>

                        <nav className={styles.footerNav}>
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    whileHover={{ color: 'var(--accent)', y: -2 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </nav>

                        <div className={styles.footerSocial}>
                            <motion.a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialIcon}
                                aria-label="GitHub"
                                whileHover={{ y: -5, color: 'var(--accent)' }}
                            >
                                <FiGithub size={18} />
                            </motion.a>
                            <motion.a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialIcon}
                                aria-label="LinkedIn"
                                whileHover={{ y: -5, color: 'var(--accent)' }}
                            >
                                <FiLinkedin size={18} />
                            </motion.a>
                            <motion.a
                                href={`mailto:${personalInfo.email}`}
                                className={styles.socialIcon}
                                aria-label="Email"
                                whileHover={{ y: -5, color: 'var(--accent)' }}
                            >
                                <FiMail size={18} />
                            </motion.a>
                        </div>

                        <div className={styles.footerDivider}></div>

                        <div className={styles.footerBottom}>
                            <p className={styles.footerText}>
                                © {currentYear} <span>{personalInfo.name}</span>
                            </p>
                            <p className={styles.techStack}>
                                Built with <motion.span
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                    style={{ display: 'inline-block' }}
                                >
                                    <FiHeart size={12} />
                                </motion.span> using React & Vite
                            </p>
                        </div>
                    </div>
                </motion.footer>
            </div>
        </section>
    );
};

export default Contact;
