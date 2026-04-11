import { motion } from 'framer-motion'

function Menu({ setMenu }){
    const scrollTo = (id) => {
        setMenu(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <>
        <motion.div 
            className="h-screen w-full  fixed top-0 left-0 z-50 hello flex flex-col items-center justify-center"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            <motion.button 
                onClick={() => setMenu(false)} 
                className="p-4 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
                Exit
            </motion.button>

            <div className='flex flex-col gap-4 p-4 '>
                <button onClick={() => scrollTo('home')}>Home</button>
                <button onClick={() => scrollTo('education')}>Education</button>
                <button onClick={() => scrollTo('skills')}>Skills</button>
                <button onClick={() => scrollTo('project')}>Project</button>
                <button onClick={() => scrollTo('home')}>Contact me</button>
            </div>
        </motion.div>
        </>
    )
}

export default Menu;