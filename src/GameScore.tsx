export interface GameScoreProps {
    bestScore: number;
    currentScore: number;
}

export default function GameScore({ bestScore, currentScore }: GameScoreProps) {
    return (
        <section>
            <p>Current Score = {currentScore}</p>
            <p>Best Score = {bestScore}</p>
        </section>
    );
}
