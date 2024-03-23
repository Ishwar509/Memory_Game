import { useEffect, useState } from "react";
import CardList from "./CardList";
import GameInfo from "./GameInfo";
import { fetchData, getRandomCards, pokeData } from "./db";

export default function App(): JSX.Element {
    const [bestScore, setBestScore] = useState(0);
    const [cards, setCards] = useState<pokeData[]>([]);
    const [chosen, setChosen] = useState<number[]>([]);
    const [isError, setIsError] = useState(false);

    function handleCardClick(cardId: number): void {
        if (chosen.includes(cardId)) {
            if (chosen.length > bestScore) setBestScore(chosen.length);
            setChosen([]);
        } else {
            setChosen([...chosen, cardId]);
        }

        setCards(getRandomCards());
    }

    useEffect(() => {
        const ok = fetchData();
        ok.then(() => {
            console.log("cards set");
            setCards(getRandomCards());
        }).catch(() => {
            setIsError(true);
        });
    }, []);

    return (
        <div>
            <GameInfo
                bestScore={bestScore}
                currentScore={chosen.length}
            ></GameInfo>
            {!isError ? (
                <CardList
                    cards={cards}
                    handleCardClick={handleCardClick}
                ></CardList>
            ) : (
                <div>API not responding</div>
            )}
        </div>
    );
}
