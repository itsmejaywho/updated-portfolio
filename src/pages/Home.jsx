import Navigation from '../layouts/Navigation'
import Body from '../layouts/Body'
import Education from '../layouts/Education'
import Skills from '../layouts/Skills'

function Home(){
    return(
    <>
    <div className='min-w-[320px] text-white flex flex-col gap-10'>
        <Navigation></Navigation>
        <div id='home'><Body></Body></div>
        <div id='education'><Education></Education></div>
        <div id='skills'><Skills></Skills></div>
    </div>
    </>
    )
}

export default Home;