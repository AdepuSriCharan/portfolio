import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiGitPullRequest } from 'react-icons/fi';
import { openSource } from '../../data/constants';
import { containerVariants, itemVariants, viewport } from '../../utils/motion';
import styles from './OpenSource.module.css';

const OpenSource = () => (
    <section className={`section ${styles.openSource}`} id="open-source">
        <div className="container">
            <motion.div
                className={styles.header}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6 }}
            >
                <p className="section-eyebrow">Open Source</p>
                <h2>Open Source</h2>
                <p>Merged contributions to CNCF Dapr and Spring AI Community projects.</p>
            </motion.div>

            <motion.div
                className={styles.grid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
            >
                {openSource.map((project) => (
                    <motion.article
                        key={project.project}
                        className={styles.card}
                        variants={itemVariants}
                        whileHover={{ y: -5, transition: { duration: 0.25 } }}
                    >
                        <div className={styles.cardHeader}>
                            <div>
                                <h3>{project.project}</h3>
                                <span className={styles.org}>{project.org}</span>
                            </div>
                            <span className={styles.prCount}>
                                <FiGitPullRequest size={12} />
                                Merged
                            </span>
                        </div>

                        <p className={styles.summary}>{project.summary}</p>

                        <ul className={styles.contributions}>
                            {project.contributions.map((contribution) => (
                                <li key={contribution}>
                                    <FiArrowRight size={14} />
                                    <span>{contribution}</span>
                                </li>
                            ))}
                        </ul>

                        <div className={styles.techStack}>
                            {project.techStack.map((tech) => (
                                <span key={tech} className={styles.tech}>{tech}</span>
                            ))}
                        </div>

                        <div className={styles.cardFooter}>
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.repoLink}
                            >
                                <FiGithub size={16} />
                                <span>Repository</span>
                            </a>
                            <div className={styles.prList}>
                                {project.prs.map((pr) => (
                                    <a
                                        key={pr.url}
                                        href={pr.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.prLink}
                                        aria-label={`Pull request ${pr.label} in ${project.project}`}
                                    >
                                        {pr.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </div>
    </section>
);

export default OpenSource;
