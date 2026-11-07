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
        <button
          className={selectedStatus === "all" ? "text-white bg-black" : ""}
          onClick={() => setSelectedStatus("all")}>
          All
        </button>
        {gameStatuses.map((status) => (
          <button
            className={selectedStatus === status ? "text-white bg-black" : ""}
            key={status}
            onClick={() => setSelectedStatus(status)}>
            {status
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </button>
        ))}
      </section>
      <section>
        {filteredGames.length === 0 ?
          <p>Denna kategori är tom 😩</p>
        : filteredGames.map((game) => <GameCard key={game.id} game={game} />)}
      </section>
    </div>
  );
};

export default Games;
