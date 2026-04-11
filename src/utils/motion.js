export const fadeInUp = {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.6 },
};

export const slideIn = (direction) => ({
    initial: { x: direction, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 1 },
});

export const progressBar = (width) => ({
    initial: { width: 0 },
    whileInView: { width },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 5, ease: "easeOut" },
});
