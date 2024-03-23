import GameTitle from "./GameTitle";
import GameScore from "./GameScore";

interface GameInfoProps {
    bestScore: number;
    currentScore: number;
}

export default function GameInfo({ bestScore, currentScore }: GameInfoProps) {
    return (
        <header>
            <GameTitle></GameTitle>
            <GameScore
                bestScore={bestScore}
                currentScore={currentScore}
            ></GameScore>
        </header>
    );
}
