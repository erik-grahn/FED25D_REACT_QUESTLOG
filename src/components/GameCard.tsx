import { Link } from "react-router";
import type { Game } from "../types/Game";

type GameCardProps = {
  game: Game;
};

const GameCard = ({ game }: GameCardProps) => {
  return (
    <article key={game.id} className="min-w-0 p-4">
      <Link to={`/games/${game.id}`} className="block h-full">
        <div className="group flex h-full flex-col justify-between gap-4 bg-black p-4">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-semibold text-white transition-colors group-hover:text-indigo-400">
              {game.title}
            </h3>

            <p className="mt-1 text-sm text-zinc-400">{game.platform}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full px-3 py-1 text-xs font-medium text-white">
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
      </Link>
    </article>
  );
};

export default GameCard;
