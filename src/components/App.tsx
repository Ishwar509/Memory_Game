import { useEffect, useState } from "react";
import CardList from "./CardList";
import GameInfo from "./GameInfo";
import { fetchData, getRandomCards, pokeData } from "../db";
import ErrorPage from "./Error";
import Loading from "./Loading";

export default function App(): JSX.Element {
    const [bestScore, setBestScore] = useState(0);
    const [cards, setCards] = useState<pokeData[]>([]);
    const [chosen, setChosen] = useState<number[]>([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

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
            setCards(getRandomCards());
        })
            .catch(() => {
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    if (isError) return <ErrorPage></ErrorPage>;
    if (isLoading) return <Loading></Loading>;

    return (
        <div className="grid min-h-screen grid-flow-row">
            <GameInfo
                bestScore={bestScore}
                currentScore={chosen.length}
            ></GameInfo>
            <CardList
                cards={cards}
                handleCardClick={handleCardClick}
            ></CardList>
        </div>
    );
}
