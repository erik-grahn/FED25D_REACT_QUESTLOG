import { useNavigate } from "react-router-dom";
import { useSaveGame } from "../../hooks/useSaveGame";
import type { GameStatus } from "../../types/Game";
import CreateNewGameForm from "./GameForm";

const CreateNewGame = () => {
  const navigate = useNavigate();
  const { error, isSaving, createGame } = useSaveGame();

  const handleSave = async (
    title: string,
    platform: string,
    status: GameStatus,
  ) => {
    await createGame({
      title,
      platform,
      status,
    });

    navigate("/games");
  };

  return (
    <CreateNewGameForm onSave={handleSave} error={error} isSaving={isSaving} />
  );
};

export default CreateNewGame;
