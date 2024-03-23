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
            <ul className="grid h-full grid-cols-[repeat(auto-fit,minmax(180px,1fr))] justify-items-center gap-6 bg-sky-100 p-6">
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
