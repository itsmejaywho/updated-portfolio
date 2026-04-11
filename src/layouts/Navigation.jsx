import Bar from '../assets/bar.svg'
import Menu from '../components/Menu'
import Contact from '../assets/contact.svg'
import Me from '../assets/me.jpg'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useTheme } from '../utils/ThemeContext'

const NavIcon = ({ type }) => {
    const icons = {
        home: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        ),
        education: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
            </svg>
        ),
        skills: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        project: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
                <path d="M12 2L2 7l10 5 10-5L12 2z" />
            </svg>
        ),
    };
    return icons[type] || null;
};

const navLinks = [
    { label: 'Home', id: 'home', icon: 'home' },
    { label: 'Education', id: 'education', icon: 'education' },
    { label: 'Skills', id: 'skills', icon: 'skills' },
    { label: 'Project', id: 'project', icon: 'project' },
];

function Navigation() {

    const [menu, setMenu] = useState(false);
    const [isCompact, setIsCompact] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            } else if (currentScrollY > 80) {
                setIsVisible(false);
            }

            setIsCompact(currentScrollY > 200);
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <>
        {/* Full navbar — visible at top */}
        <nav className={`mynav h-16 w-full sticky top-0 z-50 transition-all duration-300 ${isCompact ? 'pointer-events-none opacity-0' : 'opacity-100'}`}>
            <div className="relative h-full flex items-center px-6 md:px-12 lg:px-20 xl:px-28">
                {/* Left — Profile + Name */}
                <div className="flex items-center gap-3">
                    <img src={Me} alt="Profile" className="h-9 w-9 rounded-full object-cover border-2 border-[#d4a373]" />
                    <p className="text-[.85rem] md:text-[1rem] font-bold tracking-wide">Richmon Jay</p>
                </div>

                {/* Center — Nav Links (desktop) */}
                <div className='hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2'>
                    {navLinks.map(({ label, id, icon }) => (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className="flex items-center gap-1.5 text-[.75rem] lg:text-[.85rem] hover:text-[#d4a373] transition-colors duration-200"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            <NavIcon type={icon} />
                            {label}
                        </button>
                    ))}
                </div>

                {/* Right — Theme Toggle + Contact + Hamburger */}
                <div className="flex items-center gap-3 ml-auto">
                    <button
                        onClick={toggleTheme}
                        className="hidden md:flex items-center justify-center h-9 w-9 rounded-full hover:border-[#d4a373] transition-colors duration-200"
                        style={{ borderWidth: '1px', borderColor: 'var(--card-border)' }}
                        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {isDark ? (
                            <svg className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                        ) : (
                            <svg className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
                        )}
                    </button>
                    <button
                        className='hidden md:flex items-center justify-center h-9 w-9 rounded-full bg-[#d4a373] hover:bg-[#c49363] transition-colors duration-200'
                        onClick={() => scrollTo('home')}
                    >
                        <img src={Contact} alt="Contact" className='h-5 w-5' />
                    </button>
                    <button className='md:hidden' onClick={() => setMenu(!menu)}>
                        <img src={Bar} alt="Menu" className='h-7' />
                    </button>
                </div>
            </div>
            <div className="h-[1px] bg-gradient-to-r from-[#d4a373] via-[#67a3fd] to-[#d4a373]" />
        </nav>

        {/* Compact floating pill — visible on scroll */}
        <div className={`hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 items-center justify-between w-[40%] px-3 py-1.5 backdrop-blur-md rounded-full shadow-[0_2px_20px_rgba(0,0,0,0.15)] border transition-all duration-300 ${isCompact ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`} style={{ background: 'var(--pill-bg)', borderColor: 'var(--card-border)' }}>
            <img src={Me} alt="Profile" className="h-9 w-9 rounded-full object-cover border-2 border-[#d4a373]" />
            
            <div className="flex items-center gap-7 mx-10">
                {navLinks.map(({ id, icon }) => (
                    <button
                        key={id}
                        onClick={() => scrollTo(id)}
                        className="hover:text-[#d4a373] transition-colors duration-200 p-1"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        <NavIcon type={icon} />
                    </button>
                ))}
            </div>

            <div className="flex items-center gap-3">
                <button
                    onClick={toggleTheme}
                    className="flex items-center justify-center h-8 w-8 rounded-full hover:border-[#d4a373] transition-colors duration-200"
                    style={{ borderWidth: '1px', borderColor: 'var(--card-border)' }}
                >
                    {isDark ? (
                        <svg className="w-3.5 h-3.5" style={{ color: 'var(--text-secondary)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                    ) : (
                        <svg className="w-3.5 h-3.5" style={{ color: 'var(--text-secondary)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
                    )}
                </button>
                <button
                    className='flex items-center justify-center h-9 w-9 rounded-full bg-[#d4a373] hover:bg-[#c49363] transition-colors duration-200'
                    onClick={() => scrollTo('home')}
                >
                    <img src={Contact} alt="Contact" className='h-4 w-4' />
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