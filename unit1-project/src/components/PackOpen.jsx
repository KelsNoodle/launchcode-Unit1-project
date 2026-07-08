import { useEffect, useState } from "react";

function PackOpen() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("cards.json")
            .then(response => response.json())
            .then(cards => setCards(cards))
            .catch(error => console.error("Can't find the cards!:", error));
    }, []);
    return(
        <div>
            {cards.map((cards) => (
                <div key={cards.id}>
                    <h3>{cards.name}</h3>
                    <img src={cards.card} height="200"></img>
                </div>
            ))}
        </div>
    )
}

export default PackOpen;