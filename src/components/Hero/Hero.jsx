import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiCode, FiChevronDown, FiMail } from 'react-icons/fi';
import { personalInfo } from '../../data/constants';
import styles from './Hero.module.css';

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const { scrollY } = useScroll();

    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    const heroStats = [
        { value: "1st Place", label: "SIH Hackathon 2K26" },
        { value: "4x OCI", label: "Oracle Certifications" },
        { value: "200+", label: "LeetCode Problems" }
    ];

    return (
        <section className={styles.hero} id="hero">
            <motion.div
                className={styles.heroContent}
                style={{ y: y1, opacity }}
            >
                <motion.div
                    className={styles.photoContainer}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                >
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
                        className={styles.photoRing}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p className="section-eyebrow" variants={itemVariants}>Portfolio</motion.p>
                    <motion.h1 className={styles.name} variants={itemVariants}>
                        {personalInfo.name}
                    </motion.h1>
                    <div className={styles.roleContainer}>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={roleIndex}
                                className={styles.role}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                {personalInfo.roles[roleIndex]}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                    <motion.p className={styles.tagline} variants={itemVariants}>
                        {personalInfo.tagline}
                    </motion.p>
                    <motion.p className={styles.atsLine} variants={itemVariants}>
                        <strong>Core Stack:</strong> {personalInfo.atsKeywords.join(' · ')}
                    </motion.p>

                    <motion.div className={styles.buttons} variants={itemVariants}>
                        <motion.a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiGithub /> GitHub
                        </motion.a>
                        <motion.a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiLinkedin /> LinkedIn
                        </motion.a>
                        <motion.a
                            href={personalInfo.leetcode}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiCode /> LeetCode
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="btn btn-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiMail /> Contact
                        </motion.a>
                        <motion.a
                            href={personalInfo.resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiDownload /> Resume
                        </motion.a>
                    </motion.div>

                    <motion.div className={styles.stats} variants={itemVariants}>
                        {heroStats.map((stat, index) => (
                            <div key={index} className={styles.statCard}>
                                <span className={styles.statValue}>{stat.value}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{ y: y2 }}
            >
                <span>Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <FiChevronDown />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
