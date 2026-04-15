import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { certifications, personalInfo } from '../../data/constants';
import styles from './Certifications.module.css';

const Certifications = () => {
    const oracleCerts = certifications.filter(cert => cert.issuer === 'Oracle');
    const nptelCerts = certifications.filter(cert => cert.issuer === 'NPTEL');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    const CertCard = ({ cert }) => (
        <motion.div
            className={styles.certCard}
            variants={itemVariants}
            whileHover={{
                x: 5,
                backgroundColor: 'rgba(13, 110, 253, 0.07)',
                transition: { duration: 0.2 }
            }}
        >
            <div className={styles.certInfo}>
                <motion.div
                    className={styles.certIcon}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                >
                    <FiAward size={20} />
                </motion.div>
                <span className={styles.certName}>{cert.name}</span>
            </div>
            <motion.a
                href={cert.credential}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.credentialLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <FiExternalLink size={14} />
                View Credential
            </motion.a>
        </motion.div>
    );

    return (
        <section className={`section ${styles.certifications}`} id="certifications">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-eyebrow">Certifications</p>
                    <h2>Certifications</h2>
                    <p>Professional certifications validating cloud and programming expertise.</p>
                    <motion.a
                        href={personalInfo.allCertificatesLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.allCertLink}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <FiExternalLink size={14} />
                        View All Certificates
                    </motion.a>
                </motion.div>

                <div className={styles.groups}>
                    <motion.div
                        className={styles.group}
                        variants={containerVariants}
                        initial={false}
                        animate="visible"
                    >
                        <h3>Oracle Cloud Infrastructure</h3>
                        <div className={styles.list}>
                            {oracleCerts.map((cert, index) => (
                                <CertCard key={index} cert={cert} />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.group}
                        variants={containerVariants}
                        initial={false}
                        animate="visible"
                    >
                        <h3>NPTEL</h3>
                        <div className={styles.list}>
                            {nptelCerts.map((cert, index) => (
                                <CertCard key={index} cert={cert} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
