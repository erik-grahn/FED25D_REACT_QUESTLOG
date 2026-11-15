import type { Game } from "../../types/Game";
import { Link } from "react-router-dom";

type SpecificGameCardProps = {
  game: Game;
};

const SpecificGameCard = ({ game }: SpecificGameCardProps) => {
  return (
    <article>
      <div className="flex justify-center">
        <img
          src={
            game.coverUrl ||
            "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20200913095930"
          }
        />
      </div>
      <div className="flex items-center flex-col sm:flex-row">
        <span className="pr-4">Title: </span>
        <span className="px-4 py-2">{game.title}</span>
      </div>
      <div className="flex items-center flex-col sm:flex-row">
        <span className="pr-4">Platform: </span>
        <span className="px-4 py-2">{game.platform}</span>
      </div>
      <div className="flex items-center flex-col sm:flex-row">
        <span className="pr-4">Notes: </span>
        <span className={!game.notes ? "italic px-4 py-2" : "px-4 py-2"}>
          {game.notes ? game.notes : "No notes added yet"}
        </span>
      </div>
      <div className="flex py-2">
        <span className="pr-4">Rating: </span>
        <span className="flex items-center gap-1 px-4">
          {game.rating ?
            Array.from({ length: game.rating }).map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="16px"
                width="16px"
                fill="#f34362">
                <path
                  d="M12,21l-1.45-1.3q-2.53-2.27-4.18-3.92q-1.65-1.65-2.63-2.96Q2.78,11.5
                        2.39,10.4T2,8.15Q2,5.8 3.58,4.22T7.5,2.65q1.3,0 2.48,0.55T12,4.75q0.85-1
                        2.03-1.55T16.5,2.65q2.35,0 3.93,1.57T22,8.15q0,1.15-0.39,2.25t-1.36,2.41q-0.97,1.31-2.63,2.96q-1.65,1.65-4.17,3.92L12,21Zm0-2.7q2.4-2.15
                        3.95-3.69t2.45-2.67t1.25-2.03Q20,9.02 20,8.15q0-1.5-1-2.5t-2.5-1q-1.17,0-2.17,0.66q-1,0.66-1.38,1.69h-1.9Q10.68,5.97 9.68,5.31T7.5,4.65q-1.5,0-2.5,1T4,8.15Q4,9.02
                        4.35,9.91T5.6,11.94t2.45,2.67T12,18.3Zm0-6.83Z"
                />
              </svg>
            ))
          : <span>To be rated</span>}
        </span>
      </div>
      <div className="flex items-center flex-col sm:flex-row">
        <span className="pr-4">Status: </span>
        <span className="px-4 py-2">
          {game.status === "want" ?
            `${game.status.charAt(0).toUpperCase() + game.status.slice(1)} to play`
          : `${game.status.charAt(0).toUpperCase() + game.status.slice(1)}`}
        </span>
      </div>

      <Link to={`/games/${game.id}/edit`}>
        <p className="flex justify-center text-md mt-4 p-4 border-4 border-game-border rounded-sm hover:bg-game-input active:bg-game-border active:text-game-bg">
          Edit Game
        </p>
      </Link>
    </article>
  );
};

export default SpecificGameCard;
