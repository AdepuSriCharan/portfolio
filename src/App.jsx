import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';

function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

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
            <Navbar />
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
