import { pokeData } from "./db";

interface CardProps {
    data: pokeData;
    handleCardClick: (id: number) => void;
}

export default function Card({
    data,
    handleCardClick,
}: CardProps): JSX.Element {
    return (
        <li
            className="rounded border-2"
            onClick={() => handleCardClick(data.id)}
        >
            <p>{data.name}</p>
            <p>{data.id}</p>
            <img className="size-[140px]" src={data.imgUrl} alt={data.name} />
        </li>
    );
}
