import { motion } from 'framer-motion';
import { FiCheck, FiMapPin, FiCalendar } from 'react-icons/fi';
import { aboutMe, education, personalInfo } from '../../data/constants';
import { containerVariants, itemVariants, viewport } from '../../utils/motion';
import styles from './About.module.css';

const About = () => {
    const paragraphs = aboutMe.summary.split('\n\n');

    return (
        <section className={`section ${styles.about}`} id="about">
            <div className="container">
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <p className="section-eyebrow">About</p>
                    <h2>About Me</h2>
                    <div className={styles.headerUnderline}></div>
                </motion.div>

                <motion.div
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                >
                    <motion.div className={styles.left} variants={itemVariants}>
                        <div className={styles.summary}>
                            {paragraphs.map((paragraph) => (
                                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                            ))}
                        </div>

                        <ul className={styles.highlights}>
                            {aboutMe.highlights.map((highlight) => (
                                <motion.li
                                    key={highlight}
                                    variants={itemVariants}
                                    whileHover={{ x: 5, color: 'var(--accent)' }}
                                >
                                    <FiCheck size={18} />
                                    <span>{highlight}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div className={styles.right} variants={itemVariants}>
                        <div className={styles.photoWrapper}>
                            <a
                                href={personalInfo.profileImage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.photoLink}
                                title="Click to view full image"
                            >
                                <div className={styles.photoPlaceholder}>
                                    <img
                                        src={personalInfo.profileImage}
                                        alt={personalInfo.name}
                                        width="736"
                                        height="920"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </a>
                            <motion.div
                                className={styles.photoDecoration}
                                animate={{
                                    scale: [1, 1.05, 1],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{ duration: 5, repeat: Infinity }}
                            />
                        </div>

                        <h3 className={styles.sectionLabel}>Education</h3>
                        <div className={styles.timeline}>
                            {education.map((edu) => (
                                <motion.div
                                    key={edu.institution}
                                    className={`${styles.timelineItem} ${styles[edu.type]}`}
                                    variants={itemVariants}
                                >
                                    <div className={styles.timelineMarker}></div>
                                    <div className={styles.timelineContent}>
                                        <h4>{edu.institution}</h4>
                                        <p className={styles.degree}>{edu.degree}</p>
                                        <div className={styles.eduMeta}>
                                            <span><FiMapPin size={12} /> {edu.location}</span>
                                            <span><FiCalendar size={12} /> {edu.duration}</span>
                                        </div>
                                        <span className={styles.grade}>{edu.grade}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
