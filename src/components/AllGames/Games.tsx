import { useGames } from "../../hooks/useGames";
import GameCard from "./GameCard";
import type { GameStatus } from "../../types/Game";
import { useSaveGame } from "../../hooks/useSaveGame";
import useLocalStorage from "../../hooks/useLocalStorage";

const Games = () => {
  const { games, setGames, error, isLoading } = useGames("all");
  const { deleteGame } = useSaveGame();

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm("Are you sure you want to delet game?");

    if (!confirmed) return;

    try {
      await deleteGame(id);

      setGames((prevGames) => prevGames.filter((game) => game.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const gameStatuses: GameStatus[] = [
    "want",
    "playing",
    "completed",
    "dropped",
  ];

  const { value: selectedStatus, setValue: setSelectedStatus } =
    useLocalStorage<GameStatus | "all">("GameFilter", "all");

  const toggleFilter = (status: GameStatus | "all") => {
    setSelectedStatus((prev) => (prev === status ? "all" : status));
  };

  const filteredGames =
    selectedStatus === "all" ? games : (
      games.filter((game) => game.status === selectedStatus)
    );

  // if (isLoading) {
  //   return <p>Laddar spel...</p>;
  // }

  if (error) {
    return <p>Kunde inte hämta spel 😭</p>;
  }

  return (
    <div>
      <section className="mb-4">
        <button
          className={
            selectedStatus === "all" ?
              "text-white bg-game-accent hover:!bg-game-accent2"
            : ""
          }
          onClick={() => toggleFilter("all")}>
          All
        </button>
        {gameStatuses.map((status) => (
          <button
            className={
              selectedStatus === status ?
                "text-white bg-game-accent hover:!bg-game-accent2"
              : ""
            }
            key={status}
            onClick={() => toggleFilter(status)}>
            {status
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </button>
        ))}
      </section>
      {isLoading && (
        <p>
          <span className="typing">Laddar spel...</span>
        </p>
      )}
      <section className="flex flex-wrap w-full max-w-7xl grid-cols-1 gap-4 lg:grid-cols-2 4xl:grid-cols-4">
        {filteredGames.length === 0 ?
          <p>Denna kategori är tom 😩</p>
        : filteredGames.map((game) => (
            <GameCard key={game.id} game={game} onDelete={handleDelete} />
          ))
        }
      </section>
    </div>
  );
};

export default Games;
