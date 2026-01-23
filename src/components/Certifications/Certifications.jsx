import { FiAward, FiExternalLink } from 'react-icons/fi';
import { certifications } from '../../data/constants';
import styles from './Certifications.module.css';

const Certifications = () => {
    // Group certifications by issuer
    const oracleCerts = certifications.filter(cert => cert.issuer === 'Oracle');
    const nptelCerts = certifications.filter(cert => cert.issuer === 'NPTEL');

    const CertCard = ({ cert }) => (
        <div className={styles.certCard}>
            <div className={styles.certInfo}>
                <div className={styles.certIcon}>
                    <FiAward size={20} />
                </div>
                <span className={styles.certName}>{cert.name}</span>
            </div>
            <a
                href={cert.credential}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.credentialLink}
            >
                <FiExternalLink size={14} />
                View Credential
            </a>
        </div>
    );

    return (
        <section className={`section ${styles.certifications}`} id="certifications">
            <div className="container">
                <div className={styles.header}>
                    <h2>Certifications</h2>
                    <p>Professional certifications validating cloud and programming expertise.</p>
                </div>

                <div className={styles.groups}>
                    <div className={styles.group}>
                        <h3>Oracle Cloud Infrastructure</h3>
                        <div className={styles.list}>
                            {oracleCerts.map((cert, index) => (
                                <CertCard key={index} cert={cert} />
                            ))}
                        </div>
                    </div>

                    <div className={styles.group}>
                        <h3>NPTEL</h3>
                        <div className={styles.list}>
                            {nptelCerts.map((cert, index) => (
                                <CertCard key={index} cert={cert} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
