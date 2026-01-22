

function BodyButton({message, source}){
    return(
        <>
            <div className='flex gap-2 items-center'>
                <img src={source} alt="Phone" className='h-5 rounded-full p-1 bg-white'/>
                <p className='text-[.6rem] sm:text-[.7rem ]  md:text-[.8rem] lg:text-[.9rem] tracking-[1px]'>{message}</p>
            </div>
        </>
    )
}

export default BodyButton;