import { motion } from 'framer-motion';
import { FiGithub, FiGitlab, FiArrowRight, FiStar, FiUsers, FiAward, FiSmartphone, FiUser, FiExternalLink } from 'react-icons/fi';
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
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-eyebrow">Projects</p>
                    <h2>Projects</h2>
                    <p>Case studies focused on backend architecture, product impact, delivery ownership, and AI-ready engineering foundations.</p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial={false}
                    animate="visible"
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

                            {(project.github || project.androidRepo || project.collaborator || project.externalLinks?.length) && (
                                <div className={styles.cardFooter}>
                                    <div className={styles.links}>
                                        {project.github && (
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.link}
                                                whileHover={{ x: 5 }}
                                            >
                                                {project.isGitLab ? <FiGitlab size={18} /> : <FiGithub size={18} />}
                                                <span>View on {project.isGitLab ? 'GitLab' : 'GitHub'}</span>
                                            </motion.a>
                                        )}
                                        {project.externalLinks?.map((externalLink, linkIndex) => (
                                            <motion.a
                                                key={linkIndex}
                                                href={externalLink.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.link}
                                                whileHover={{ x: 5 }}
                                            >
                                                <FiExternalLink size={18} />
                                                <span>{externalLink.label}</span>
                                            </motion.a>
                                        ))}
                                        {project.androidRepo && (
                                            <motion.a
                                                href={project.androidRepo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.link}
                                                whileHover={{ x: 5 }}
                                            >
                                                <FiSmartphone size={18} />
                                                <span>Android App</span>
                                            </motion.a>
                                        )}
                                    </div>
                                    {project.collaborator && (
                                        <div className={styles.collaborator}>
                                            <FiUser size={14} />
                                            <span>Collaborated with </span>
                                            <motion.a
                                                href={project.collaborator.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.collabLink}
                                                whileHover={{ color: 'var(--accent)' }}
                                            >
                                                {project.collaborator.name}
                                            </motion.a>
                                        </div>
                                    )}
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
