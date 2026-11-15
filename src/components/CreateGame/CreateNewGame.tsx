import { useNavigate } from "react-router-dom";
import { useSaveGame } from "../../hooks/useSaveGame";
import type { NewGame } from "../../types/Game";
import GameForm from "../GameForm";

const CreateNewGame = () => {
  const navigate = useNavigate();
  const { error, isSaving, createGame } = useSaveGame();

  const handleSave = async (newGame: NewGame) => {
    await createGame(newGame);
    navigate("/games");
  };

  return <GameForm onSave={handleSave} error={error} isSaving={isSaving} />;
};

export default CreateNewGame;
