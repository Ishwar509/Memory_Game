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
            className="grid w-max cursor-pointer grid-flow-row justify-items-center rounded-md bg-gradient-to-br from-indigo-300 to-pink-200 shadow-md shadow-gray-400 transition-transform delay-75 ease-in-out hover:-rotate-6"
            onClick={() => handleCardClick(data.id)}
        >
            <img className="size-44" src={data.imgUrl} alt={data.name} />
            <p className="font-mono text-xl font-semibold">
                {data.name.toUpperCase()}
            </p>
        </li>
    );
}
