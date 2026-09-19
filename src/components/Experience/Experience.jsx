import { motion } from 'framer-motion';
import { FiArrowRight, FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { experience } from '../../data/constants';
import { containerVariants, itemVariants, viewport } from '../../utils/motion';
import styles from './Experience.module.css';

const Experience = () => (
    <section className={`section ${styles.experience}`} id="experience">
        <div className="container">
            <motion.div
                className={styles.header}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6 }}
            >
                <p className="section-eyebrow">Experience</p>
                <h2>Experience</h2>
            </motion.div>

            <motion.div
                className={styles.list}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
            >
                {experience.map((role) => (
                    <motion.article
                        key={`${role.company}-${role.role}`}
                        className={styles.roleCard}
                        variants={itemVariants}
                    >
                        <div className={styles.timelineRail} aria-hidden="true">
                            <span className={styles.railDot} />
                            <span className={styles.railLine} />
                        </div>

                        <div className={styles.roleBody}>
                            <div className={styles.roleHeader}>
                                <div>
                                    <h3 className={styles.roleTitle}>{role.role}</h3>
                                    <p className={styles.company}>
                                        <FiBriefcase size={14} />
                                        <span>{role.company}</span>
                                    </p>
                                </div>
                                <div className={styles.roleMeta}>
                                    {role.current && (
                                        <span className={styles.currentBadge}>
                                            <span className={styles.pulse} aria-hidden="true" />
                                            Current
                                        </span>
                                    )}
                                    <span className={styles.metaLine}>
                                        <FiCalendar size={13} /> {role.period}
                                    </span>
                                    {role.locationType && (
                                        <span className={styles.metaLine}>
                                            <FiMapPin size={13} /> {role.locationType}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <p className={styles.summary}>{role.summary}</p>

                            <ul className={styles.highlights}>
                                {role.highlights.map((highlight) => (
                                    <li key={highlight}>
                                        <FiArrowRight size={14} />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className={styles.techStack}>
                                {role.techStack.map((tech) => (
                                    <span key={tech} className={styles.tech}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </div>
    </section>
);

export default Experience;
