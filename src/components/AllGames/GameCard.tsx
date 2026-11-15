import { Link } from "react-router";
import type { Game } from "../../types/Game";

type GameCardProps = {
  game: Game;
  onDelete: (id: string) => Promise<void>;
};

const GameCard = ({ game, onDelete }: GameCardProps) => {
  return (
    <article
      key={game.id}
      className="h-auto w-92 min-w-86 bg-game-card border-3 rounded-md">
      <div className="bg-game-input h-16 flex justify-between shadow-[0_4px_0_0_rgba(0,0,0,0.5)]">
        <span className="flex items-center gap-1 ml-4">
          {game.rating ?
            Array.from({ length: game.rating }).map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="14px"
                width="14px"
                fill="#f34362"
                stroke="#f34362"
                strokeWidth={1}>
                <path
                  d="M12,21l-1.45-1.3q-2.53-2.27-4.18-3.92q-1.65-1.65-2.63-2.96Q2.78,11.5
                        2.39,10.4T2,8.15Q2,5.8 3.58,4.22T7.5,2.65q1.3,0 2.48,0.55T12,4.75q0.85-1
                        2.03-1.55T16.5,2.65q2.35,0 3.93,1.57T22,8.15q0,1.15-0.39,2.25t-1.36,2.41q-0.97,1.31-2.63,2.96q-1.65,1.65-4.17,3.92L12,21Zm0-2.7q2.4-2.15
                        3.95-3.69t2.45-2.67t1.25-2.03Q20,9.02 20,8.15q0-1.5-1-2.5t-2.5-1q-1.17,0-2.17,0.66q-1,0.66-1.38,1.69h-1.9Q10.68,5.97 9.68,5.31T7.5,4.65q-1.5,0-2.5,1T4,8.15Q4,9.02
                        4.35,9.91T5.6,11.94t2.45,2.67T12,18.3Zm0-6.83Z"
                />
              </svg>
            ))
          : <span className="italic text-sm">To be rated</span>}
        </span>
        <div className="flex items-center gap-4 mr-4">
          <Link
            to={`/games/${game.id}/edit`}
            className="flex h-12 w-24 items-center justify-center border-game-edit rounded-sm border-3 p-0 text-sm !bg-game-card hover:!bg-game-bg active:!bg-gray-900">
            <span className="text-game-edit pt-1">Edit</span>
          </Link>

          <button
            type="button"
            onClick={() => void onDelete(game.id)}
            className="cursor-pointer !m-0 !box-border !flex !h-12 !w-24 !items-center !justify-center !rounded-sm !border-3 !border-game-accent !bg-game-card !p-0 !text-sm hover:!bg-game-bg active:!bg-gray-900">
            <span className="text-game-accent pt-1">Delete</span>
          </button>
        </div>
      </div>

      <Link to={`/games/${game.id}`} className="">
        <div className="p-4">
          <div className="p-2">
            <span>Title: </span>
            <span>{game.title}</span>
          </div>
          <div className="p-2">
            <span>Platform: </span>
            <span>{game.platform}</span>
          </div>
          <div className="p-2">
            <span>Status: </span>
            <span>{game.status}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default GameCard;
