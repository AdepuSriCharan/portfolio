import { motion, useScroll, useTransform } from 'framer-motion';
import { FiCheck, FiMapPin, FiCalendar } from 'react-icons/fi';
import { aboutMe, education, personalInfo } from '../../data/constants';
import styles from './About.module.css';

const About = () => {
    const { scrollYProgress } = useScroll();
    const headerOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 1, 1]);
    const headerY = useTransform(scrollYProgress, [0, 0.2, 0.3], [50, 0, 0]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
        <section className={`section ${styles.about}`} id="about">
            <div className="container">
                <motion.div
                    className={styles.sectionHeader}
                    style={{ opacity: headerOpacity, y: headerY }}
                >
                    <h2>About Me</h2>
                    <div className={styles.headerUnderline}></div>
                </motion.div>

                <motion.div
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div className={styles.left} variants={itemVariants}>
                        <p className={styles.summary}>{aboutMe.summary}</p>

                        <ul className={styles.highlights}>
                            {aboutMe.highlights.map((highlight, index) => (
                                <motion.li
                                    key={index}
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
                                    <img src={personalInfo.profileImage} alt={personalInfo.name} />
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
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
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
