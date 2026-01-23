import { FiGithub, FiGitlab, FiArrowRight, FiStar, FiUsers, FiAward } from 'react-icons/fi';
import { projects } from '../../data/constants';
import styles from './Projects.module.css';

const Projects = () => {
    return (
        <section className={`section ${styles.projects}`} id="projects">
            <div className="container">
                <div className={styles.header}>
                    <h2>Projects</h2>
                    <p>Production-ready applications showcasing full-stack engineering and system design.</p>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
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
                                    <span key={techIndex} className={styles.tech}>{tech}</span>
                                ))}
                            </div>

                            <ul className={styles.highlights}>
                                {project.highlights.map((highlight, hIndex) => (
                                    <li key={hIndex}>
                                        <FiArrowRight size={14} />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>

                            {project.github && (
                                <div className={styles.cardFooter}>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.link}
                                    >
                                        {project.isGitLab ? <FiGitlab size={18} /> : <FiGithub size={18} />}
                                        View on {project.isGitLab ? 'GitLab' : 'GitHub'}
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
