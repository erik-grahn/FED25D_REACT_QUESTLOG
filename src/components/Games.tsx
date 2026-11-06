import { useState } from "react";
import { useGames } from "../hooks/useGames";
import GameCard from "./GameCard";
import type { GameStatus } from "../types/Game";

const Games = () => {
  const { games, error, isLoading } = useGames("all");

  const gameStatuses: GameStatus[] = [
    "want-to-play",
    "playing",
    "completed",
    "dropped",
  ];

  const [selectedStatus, setSelectedStatus] = useState<GameStatus | "all">(
    "all",
  );

  const filteredGames =
    selectedStatus === "all" ? games : (
      games.filter((game) => game.status === selectedStatus)
    );

  if (isLoading) {
    return <p>Laddar spel...</p>;
  }

  if (error) {
    return <p>Kunde inte hämta spel 😭</p>;
  }

  return (
    <div>
      <section>
        {gameStatuses.map((status) => (
          <button key={status} onClick={() => setSelectedStatus(status)}>
            {status}
          </button>
        ))}
      </section>
      <section>
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </section>
    </div>
  );
};

export default Games;
