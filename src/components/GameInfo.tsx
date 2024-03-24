import GameTitle from "./GameTitle";
import GameScore from "./GameScore";

interface GameInfoProps {
    bestScore: number;
    currentScore: number;
}

export default function GameInfo({ bestScore, currentScore }: GameInfoProps) {
    return (
        <header className="grid min-h-24 grid-flow-row place-items-center bg-slate-50 md:grid-cols-2">
            <GameTitle></GameTitle>
            <GameScore
                bestScore={bestScore}
                currentScore={currentScore}
            ></GameScore>
        </header>
    );
}
