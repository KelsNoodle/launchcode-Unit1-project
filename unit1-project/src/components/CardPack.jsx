function CardPack({ onOpen }) {
    return(
        <div id="cardpack" onClick={onOpen} role="button">
            <img  src="card-pack.png" alt="card pack" height="400"></img> 
        </div>   
    )
}

export default CardPack;