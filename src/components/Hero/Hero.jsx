import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiDownload, FiChevronDown } from 'react-icons/fi';
import { personalInfo } from '../../data/constants';
import styles from './Hero.module.css';

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
                setIsVisible(true);
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.hero} id="hero">
            <div className={styles.heroContent}>
                <p className={styles.greeting}>Hello, I'm</p>
                <h1 className={styles.name}>
                    <span className="text-gradient">{personalInfo.name}</span>
                </h1>
                <p className={`${styles.role} ${isVisible ? styles.visible : styles.hidden}`}>
                    {personalInfo.roles[roleIndex]}
                </p>
                <p className={styles.tagline}>{personalInfo.tagline}</p>

                <div className={styles.buttons}>
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        <FiGithub /> GitHub
                    </a>
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                    >
                        <FiLinkedin /> LinkedIn
                    </a>
                    <a
                        href={personalInfo.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                    >
                        <FiDownload /> Resume
                    </a>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <span>Scroll to explore</span>
                <FiChevronDown />
            </div>
        </section>
    );
};

export default Hero;
