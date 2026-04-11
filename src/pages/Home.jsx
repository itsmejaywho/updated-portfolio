import Navigation from '../layouts/Navigation'
import Body from '../layouts/Body'
import Education from '../layouts/Education'
import Skills from '../layouts/Skills'
import Project from '../layouts/Project'
import Contact from '../layouts/Contact'
import Footer from '../layouts/Footer'

function Home(){
    return(
    <>
    <div className='min-w-[320px] flex flex-col' style={{ color: 'var(--text-primary)' }}>
        <header><Navigation /></header>
        <main>
            <section id='home'><Body /></section>
            <section id='skills'><Skills /></section>
            <section id='education'><Education /></section>
            <section id='project'><Project /></section>
            <section id='contact'><Contact /></section>
        </main>
        <Footer />
    </div>
    </>
    )
}

export default Home;