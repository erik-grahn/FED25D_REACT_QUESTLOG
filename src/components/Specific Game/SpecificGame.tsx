import { useGame } from "../../hooks/useGame";
import SpecificGameCard from "./SpecificGameCard";

const SpecificGame = () => {
  const { game, isLoading, error } = useGame("");

  if (isLoading) {
    console.log("Specific game isLoading");
    return <p>Laddar spel...</p>;
  }

  if (error) {
    console.log("SpecificGame error");
    return <p>Kunde inte hämta spel från databasen 😭</p>;
  }

  if (!game) {
    console.log("Specific Game !game");
    return <p>Kunde inte hitta spel i databasen 😭</p>;
  }

  return (
    <div>
      <SpecificGameCard game={game} />
    </div>
  );
};

export default SpecificGame;
