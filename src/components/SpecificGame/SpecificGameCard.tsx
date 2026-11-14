import type { Game } from "../../types/Game";
import { Link } from "react-router-dom";

type SpecificGameCardProps = {
  game: Game;
};

const SpecificGameCard = ({ game }: SpecificGameCardProps) => {
  return (
    <div>
      <p>{game.title}</p>

      <img
        src={
          game.coverUrl ||
          "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20200913095930"
        }
      />
      <p>{game.platform}</p>
      <p>{game.notes ? game.notes : "No notes added to this game yet"}</p>
      <p>{game.rating ? game.rating : "Game has not been rated yet"}</p>
      <p>{game.status}</p>

      <Link to={`/games/${game.id}/edit`}>
        <p className="text-xl text-center w-42 p-4 border-4 border-black rounded-sm hover:bg-gray-300 active:bg-gray-700 active:text-white">
          Edit Game
        </p>
      </Link>
    </div>
  );
};

export default SpecificGameCard;
