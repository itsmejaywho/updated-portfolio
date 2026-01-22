import Bar from '../assests/bar.svg'
import Menu from '../components/Menu'
import Button from '../components/Button'
import Contact from '../assests/contact.svg'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'


function Navigation() {

    const [menu, setMenu] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY < lastScrollY) {

                setIsVisible(true);
            } else if (currentScrollY > 80) {

                setIsVisible(false);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return(
        <>
        <div className={`mynav h-20 w-full flex border-b border-[#182b42] sticky top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="w-[50%] sm:text-[1.1rem] md:text-[1.2rem]  h-full flex items-center gap-1 md:w-[20%] md:justify-end lg:justify-center">
                <p className="p-1 bg-white text-black font-bold rounded-[10px]">
                    {'{R}'}
                </p>
                <p>
                    ICHMON
                </p>
            </div>
            <div className="w-[50%] h-full flex justify-end md:hidden">
                <button className='h-full' onClick={() => setMenu(!menu)} >
                    <img src={Bar} alt="Menu" className='h-[50%]' />
                </button>
            </div>

            <div className='hidden md:flex gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 w-[60%] items-center justify-center text-[.7rem] lg:text-[.8rem]'>
                <Button message='Home' onClick={() => document.getElementById('home')?.scrollIntoView({behavior: 'smooth'})}/>
                <Button message='Education' onClick={() => document.getElementById('education')?.scrollIntoView({behavior: 'smooth'})}/>
                <Button message='Skills' onClick={() => document.getElementById('skills')?.scrollIntoView({behavior: 'smooth'})}/>
                <Button message='Project' onClick={() => document.getElementById('project')?.scrollIntoView({behavior: 'smooth'})}/>
            </div>

            <div className='hidden md:flex w-[20%]  items-center lg:justify-center'>
                <button className=' items-center justify-center gap-1 p-2 bg-black flex rounded-[10px]'>
                    <img src={Contact} alt="Contact" className='h-6 sm:h-7 md:h-8 rounded-full bg-white p-1'/>
                    <p className='text-[.8rem] sm:text-[.9rem]'>Contact me</p>
                </button>
            </div>



        </div>
        <AnimatePresence>
            {menu && <Menu setMenu={setMenu} />}
        </AnimatePresence>
        </>
    )
}

export default Navigation