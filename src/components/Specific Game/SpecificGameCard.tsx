import type { Game } from "../../types/Game";

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
    </div>
  );
};

export default SpecificGameCard;
