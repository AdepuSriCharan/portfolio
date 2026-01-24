import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </motion.button>

                <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={index}
                            variants={linkVariants}
                        >
                            <motion.a
                                href={link.href}
                                onClick={handleLinkClick}
                                whileHover={{ y: -2, color: 'var(--accent)' }}
                                transition={{ duration: 0.2 }}
                            >
                                {link.name}
                            </motion.a>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
