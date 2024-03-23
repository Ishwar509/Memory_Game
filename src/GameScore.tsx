export interface GameScoreProps {
    bestScore: number;
    currentScore: number;
}

export default function GameScore({ bestScore, currentScore }: GameScoreProps) {
    return (
        <section>
            <p className="font-mono text-xl">
                Current Score:{" "}
                <span className="font-poppins text-2xl text-sky-600">
                    {currentScore}
                </span>
            </p>
            <p className="font-mono text-xl">
                Best Score:{" "}
                <span className="font-poppins text-2xl text-red-500">
                    {bestScore}
                </span>
            </p>
        </section>
    );
}
