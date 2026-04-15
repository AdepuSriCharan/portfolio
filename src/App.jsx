import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';

const DEFAULT_THEME = 'dark-theme';

function App() {
    const [currentTheme, setCurrentTheme] = useState(() => {
        if (typeof window === 'undefined') {
            return DEFAULT_THEME;
        }
        return localStorage.getItem('portfolio-theme') || DEFAULT_THEME;
    });
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('portfolio-theme', currentTheme);
    }, [currentTheme]);

    return (
        <>
            <motion.div
                className="scroll-progress"
                style={{
                    scaleX,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'var(--accent)',
                    transformOrigin: '0%',
                    zIndex: 1000
                }}
            />
            <Navbar currentTheme={currentTheme} onThemeChange={setCurrentTheme} />
            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Certifications />
                <Contact />
            </main>
        </>
    );
}

export default App;
