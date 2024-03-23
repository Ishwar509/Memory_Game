import Card from "./Card";
import { pokeData } from "./db";

interface CardListProps {
    cards: pokeData[];
    handleCardClick: (id: number) => void;
}

export default function CardList({
    cards,
    handleCardClick,
}: CardListProps): JSX.Element {
    return (
        <main>
            <ul className="grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3">
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        data={card}
                        handleCardClick={handleCardClick}
                    ></Card>
                ))}
            </ul>
        </main>
    );
}
