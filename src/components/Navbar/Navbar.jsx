import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '../../data/constants';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.navContent}>
                <a href="#hero" className={styles.logo}>
                    <span>Sri Charan</span>
                </a>

                <button
                    className={styles.menuButton}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} onClick={handleLinkClick}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
