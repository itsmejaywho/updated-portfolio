import Body from '../layouts/Body'

function Home(){
    return(
    <>
    <div className='h-screen min-w-[320px] overflow-hidden' style={{ color: 'var(--text-primary)' }}>
        <main className="h-full overflow-hidden">
            <section id='home'><Body /></section>
        </main>
    </div>
    </>
    )
}

export default Home;
