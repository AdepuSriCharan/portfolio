import { motion } from 'framer-motion';
import { FiGithub, FiGitlab, FiArrowRight, FiStar, FiUsers, FiAward } from 'react-icons/fi';
import { projects } from '../../data/constants';
import styles from './Projects.module.css';

const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section className={`section ${styles.projects}`} id="projects">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Projects</h2>
                    <p>Production-ready applications showcasing full-stack engineering and system design.</p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.cardTitle}>
                                    <h3>{project.name}</h3>
                                    <div className={styles.badges}>
                                        {project.featured && (
                                            <span className={`${styles.badge} ${styles.featuredBadge}`}>
                                                <FiStar size={12} /> Featured
                                            </span>
                                        )}
                                        {project.isMajorProject && (
                                            <span className={`${styles.badge} ${styles.majorBadge}`}>
                                                <FiUsers size={12} /> Team Lead
                                            </span>
                                        )}
                                        {project.isHackathon && (
                                            <span className={`${styles.badge} ${styles.hackathonBadge}`}>
                                                <FiAward size={12} /> Hackathon
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <span className={styles.archBadge}>{project.architectureType}</span>
                            </div>

                            <p className={styles.description}>{project.description}</p>

                            <div className={styles.techStack}>
                                {project.techStack.map((tech, techIndex) => (
                                    <motion.span
                                        key={techIndex}
                                        className={styles.tech}
                                        whileHover={{ scale: 1.1, color: 'var(--accent)' }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>

                            <ul className={styles.highlights}>
                                {project.highlights.map((highlight, hIndex) => (
                                    <motion.li
                                        key={hIndex}
                                        whileHover={{ x: 5, color: 'var(--accent)' }}
                                    >
                                        <FiArrowRight size={14} />
                                        <span>{highlight}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            {project.github && (
                                <div className={styles.cardFooter}>
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.link}
                                        whileHover={{ x: 5 }}
                                    >
                                        {project.isGitLab ? <FiGitlab size={18} /> : <FiGithub size={18} />}
                                        View on {project.isGitLab ? 'GitLab' : 'GitHub'}
                                    </motion.a>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
