import { useState } from "react";
import cardsData from "../data/cards.json";
import CardPack from "./CardPack";

function pickRandomCards(list, count) {
    // const n = math.floor(math.random() *31);
    const n = list.length;
    if (n === 0) return [];

    const start = Math.floor(Math.random() * n);

    const result = [];
    for (let x = 0; x < count && x < n; x++) {
        result.push(list[(start + x) % n]);
    }
    return result;
}

export default function PackOpen() {
    const [packCards, setPackCards] = useState([]);

    const openPack = () => {
        if (packCards.length > 0) return;
        setPackCards(pickRandomCards(cardsData, 5));
    };

    const dismissTopCard = () => {
        setPackCards((prev) => prev.slice(1));
    }
    const topCard = packCards[0];

    return(
        <div>
            <CardPack onOpen={openPack} />

            {packCards.length > 0 && (
                <div
                onClick={(e) => e.preventDefault()}
                    style={{
                     position: "fixed",
                     inset: 0,
                     zIndex: 9999,
                     background: "transparent",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center"
                    }}
                >
                    <img src={topCard.card} alt={topCard.name} onClick={dismissTopCard} style={{
                                    height: "400px",
                                    cursor: "pointer",
                                    display: "block",
                                    margin: "0 auto"
                                    }}
                    />
                    </div>
            )}
        </div>
    );
}