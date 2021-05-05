function Message({error, type}){
    return(
        <>
            {error && (<p className={type}>{error}</p>)}
        </>
    );
}

export default Message;