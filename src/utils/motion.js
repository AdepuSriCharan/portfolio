// Shared framer-motion presets.
// Sections reveal on scroll with `whileInView`; `once: true` keeps content
// visible after it has been seen so nothing can re-hide itself mid-scroll.
export const viewport = { once: true, amount: 0.15 };

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 }
    }
};

export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
};
