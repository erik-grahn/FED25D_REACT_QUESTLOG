import type { Game } from "../../types/Game";

type SpecificGameCardProps = {
  game: Game;
};

const SpecificGameCard = ({ game }: SpecificGameCardProps) => {
  return (
    <div>
      <p>{game.title}</p>
      <img src={game.coverUrl} />
      <p>{game.platform}</p>
      <p>{game.notes}</p>
      <p>{game.rating}</p>
      <p>{game.status}</p>
    </div>
  );
};

export default SpecificGameCard;
