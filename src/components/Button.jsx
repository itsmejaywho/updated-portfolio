function Button({message, onClick}){
    return(
        <>
        <button onClick={onClick}>{message}</button>
        </>
    )
}

export default Button