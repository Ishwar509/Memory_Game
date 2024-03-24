import pokeballImg from "./assets/pokeball.png";

export default function Loading() {
    return (
        <div className="grid min-h-screen place-content-center justify-items-center bg-sky-400">
            <img
                className="size-28 animate-bounce"
                src={pokeballImg}
                alt="pokeball"
            />
            <p className="text-center font-mono text-2xl font-bold">
                Loading...
            </p>
        </div>
    );
}
