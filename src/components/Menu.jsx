import { motion } from 'framer-motion'
import Button from '../components/Button'

function Menu({ setMenu }){
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
                <Button message='Home'/>
                <Button message='Education'/>
                <Button message='Skills'/>
                <Button message='Project'/>
                <Button message='Contact me'/>
            </div>
        </motion.div>
        </>
    )
}

export default Menu;