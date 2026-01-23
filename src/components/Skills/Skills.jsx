import {
    FiCode,
    FiServer,
    FiDatabase,
    FiCloud,
    FiLayout,
    FiCpu,
    FiSmartphone
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

    // Split into rows for visual balance
    const firstRow = skillEntries.slice(0, 3);
    const secondRow = skillEntries.slice(3, 5);
    const thirdRow = skillEntries.slice(5);

    const SkillCard = ({ categoryKey, category }) => {
        const Icon = iconMap[categoryKey] || FiCode;
        return (
            <div
                className={styles.skillCard}
                data-category={categoryKey}
            >
                <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>
                        <Icon size={20} />
                    </div>
                    <h3>{category.title}</h3>
                </div>
                <div className={styles.skillList}>
                    {category.items.map((skill, index) => (
                        <span key={index} className={styles.skill}>{skill}</span>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section className={`section ${styles.skills}`} id="skills">
            <div className="container">
                <div className={styles.header}>
                    <h2>Technical Skills</h2>
                    <p>Technologies and tools I use to build scalable, production-ready systems.</p>
                </div>

                <div className={styles.skillsContainer}>
                    <div className={styles.skillRow}>
                        {firstRow.map(([key, category]) => (
                            <SkillCard key={key} categoryKey={key} category={category} />
                        ))}
                    </div>
                    <div className={styles.skillRow}>
                        {secondRow.map(([key, category]) => (
                            <SkillCard key={key} categoryKey={key} category={category} />
                        ))}
                    </div>
                    <div className={styles.skillRow}>
                        {thirdRow.map(([key, category]) => (
                            <SkillCard key={key} categoryKey={key} category={category} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
