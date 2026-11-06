import { useGames } from "../hooks/useGames";

const GameCard = () => {
  const { games, error, isLoading } = useGames("all");

  if (isLoading) {
    return <p>Laddar spel...</p>;
  }

  if (error) {
    return <p>Kunde inte hämta spel 😭</p>;
  }

  return (
    <article className="m-4">
      {games.map((game) => (
        <div
          key={game.id}
          className="my-4 w-90 group flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 shadow-sm transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-lg font-semibold text-white transition-colors group-hover:text-indigo-400">
              {game.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-400">{game.platform}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full px-3 py-1 text-xs font-medium">
              {game.status}
            </span>

            <div className="flex items-center gap-1.5 rounded-lg bg-zinc-800/80 px-3 py-2">
              <span className="text-amber-400">★</span>
              <span className="text-sm font-semibold text-white">
                {game.rating ?? "n/a"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </article>
  );
};

export default GameCard;
