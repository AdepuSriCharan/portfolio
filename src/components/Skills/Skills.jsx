import { motion } from 'framer-motion';
import {
    FiCode,
    FiServer,
    FiDatabase,
    FiSmartphone,
    FiCloud,
    FiLayout,
    FiCpu
} from 'react-icons/fi';
import { skills } from '../../data/constants';
import styles from './Skills.module.css';

const iconMap = {
    languages: FiCode,
    backend: FiServer,
    databases: FiDatabase,
    mobile: FiSmartphone,
    devops: FiCloud,
    frontend: FiLayout,
    aiml: FiCpu
};

const Skills = () => {
    const skillEntries = Object.entries(skills);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    const SkillCard = ({ categoryKey, category }) => {
        const Icon = iconMap[categoryKey] || FiCode;
        return (
            <motion.div
                className={styles.skillCard}
                data-category={categoryKey}
                variants={cardVariants}
                whileHover={{
                    y: -5,
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)',
                    borderColor: 'var(--accent)',
                }}
            >
                <div className={styles.cardHeader}>
                    <motion.div
                        className={styles.iconWrapper}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Icon size={20} />
                    </motion.div>
                    <h3>{category.title}</h3>
                </div>
                <div className={styles.skillList}>
                    {category.items.map((skill, index) => (
                        <motion.span
                            key={index}
                            className={styles.skill}
                            whileHover={{ scale: 1.1, color: 'var(--accent)' }}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        );
    };

    return (
        <section className={`section ${styles.skills}`} id="skills">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-eyebrow">Skills</p>
                    <h2>Technical Skills</h2>
                    <p>Core technologies I use to build secure, scalable, and production-ready applications.</p>
                </motion.div>

                <motion.div
                    className={styles.skillsContainer}
                    variants={containerVariants}
                    initial={false}
                    animate="visible"
                >
                    {skillEntries.map(([key, category]) => (
                        <SkillCard key={key} categoryKey={key} category={category} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
