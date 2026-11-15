import { useParams } from "react-router";
import { useGame } from "../../hooks/useGame";
import SpecificGameCard from "./SpecificGameCard";

const SpecificGame = () => {
  const { id } = useParams();
  const { game, isLoading, error } = useGame(id ?? "");

  if (isLoading) {
    console.log("Specific game isLoading");
    return <p className="typing">Loading game...</p>;
  }

  if (error) {
    console.log("SpecificGame error");
    return <p>Couldn't get game from database 😭</p>;
  }

  if (!game) {
    console.log("Specific Game !game");
    return <p>Couldn't find game in database 😭</p>;
  }

  return (
    <div>
      <SpecificGameCard game={game} />
    </div>
  );
};

export default SpecificGame;
