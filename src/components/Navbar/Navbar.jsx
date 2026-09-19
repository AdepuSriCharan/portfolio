import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiMoon, FiSun, FiX, FiZap } from 'react-icons/fi';
import { navLinks, themeOptions } from '../../data/constants';
import styles from './Navbar.module.css';

const sectionIds = navLinks.map((link) => link.href.replace('#', ''));

const themeIconMap = {
    'dark-theme': FiMoon,
    'light-theme': FiSun,
    'midnight-theme': FiZap
};

const Navbar = ({ currentTheme, onThemeChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Highlight the section currently under the navbar.
    // Ranking by intersection ratio does not work here: ratio is relative to
    // each section's own height, so a short section beats a tall one that
    // fills the whole viewport. Instead pick the last section whose top edge
    // has passed under the navbar.
    useEffect(() => {
        const updateActiveSection = () => {
            const offset = 120;
            let current = '';

            for (const id of sectionIds) {
                const section = document.getElementById(id);
                if (section && section.getBoundingClientRect().top <= offset) {
                    current = id;
                }
            }

            // Anything above the first section (the hero) highlights nothing;
            // hitting the bottom of the page should land on the last link.
            const atBottom =
                window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
            setActiveSection(atBottom ? sectionIds[sectionIds.length - 1] : current);
        };

        updateActiveSection();
        window.addEventListener('scroll', updateActiveSection, { passive: true });
        window.addEventListener('resize', updateActiveSection);
        return () => {
            window.removeEventListener('scroll', updateActiveSection);
            window.removeEventListener('resize', updateActiveSection);
        };
    }, []);

    // Escape closes the mobile menu; without this the only way out is the X.
    useEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    const handleLinkClick = useCallback(() => {
        setIsOpen(false);
    }, []);

    const navVariants = {
        hidden: { y: -100 },
        visible: {
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.nav
            className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
            variants={navVariants}
            initial="hidden"
            animate="visible"
            aria-label="Primary"
        >
            <div className={styles.navContent}>
                <motion.a
                    href="#hero"
                    className={styles.logo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span>Sri Charan</span>
                </motion.a>

                <motion.button
                    className={styles.menuButton}
                    onClick={() => setIsOpen((open) => !open)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                    aria-controls="primary-nav-links"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </motion.button>

                <ul
                    id="primary-nav-links"
                    className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}
                >
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.replace('#', '');
                        return (
                            <motion.li key={link.href} variants={linkVariants}>
                                <a
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className={isActive ? styles.activeLink : undefined}
                                    aria-current={isActive ? 'true' : undefined}
                                >
                                    {link.name}
                                </a>
                            </motion.li>
                        );
                    })}
                </ul>

                <div className={styles.actions}>
                    <span className={styles.themeLabel}>Theme</span>
                    <div className={styles.themeButtons} role="group" aria-label="Select portfolio theme">
                        {themeOptions.map((theme) => {
                            const Icon = themeIconMap[theme.id];
                            return (
                                <button
                                    key={theme.id}
                                    type="button"
                                    className={`${styles.themeButton} ${currentTheme === theme.id ? styles.activeTheme : ''}`}
                                    onClick={() => onThemeChange(theme.id)}
                                    aria-label={`${theme.label} theme`}
                                    aria-pressed={currentTheme === theme.id}
                                    title={theme.label}
                                >
                                    <Icon size={14} />
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
