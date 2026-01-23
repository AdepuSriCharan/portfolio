import { FiCheck, FiMapPin, FiCalendar } from 'react-icons/fi';
import { aboutMe, education } from '../../data/constants';
import styles from './About.module.css';

const About = () => {
    return (
        <section className={`section ${styles.about}`} id="about">
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.left}>
                        <h2>About Me</h2>
                        <p className={styles.summary}>{aboutMe.summary}</p>

                        <ul className={styles.highlights}>
                            {aboutMe.highlights.map((highlight, index) => (
                                <li key={index}>
                                    <FiCheck size={18} />
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.right}>
                        <h3 className={styles.sectionLabel}>Education</h3>
                        <div className={styles.timeline}>
                            {education.map((edu, index) => (
                                <div key={index} className={`${styles.timelineItem} ${styles[edu.type]}`}>
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
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
