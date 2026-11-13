import { useNavigate, useParams } from "react-router-dom";
import { useGame } from "../../hooks/useGame";
import GameForm from "../Create Game/GameForm";
import { useSaveGame } from "../../hooks/useSaveGame";
import type { NewGame } from "../../types/Game";

const EditSpecificGame = () => {
  const { id } = useParams();
  const { error, isLoading, game } = useGame(id ?? "");
  const navigate = useNavigate();
  const { updateGame, isSaving, error: saveError } = useSaveGame();

  if (isLoading) {
    return <p>Loading game</p>;
  }

  if (error || !game) {
    return <p>Could not load game</p>;
  }

  const handleUpdate = async (updatedGame: NewGame) => {
    if (!id) {
      return;
    }
    await updateGame(id, updatedGame);
    navigate(`/games/${id}`);
  };

  return (
    <GameForm
      initialTitle={game.title}
      initialPlatform={game.platform}
      initialStatus={game.status}
      initialNotes={game.notes}
      initialRating={game.rating}
      initialCoverUrl={game.coverUrl}
      submitLabel="Save Changes"
      onSave={handleUpdate}
      error={saveError}
      isSaving={isSaving}></GameForm>
  );
};

export default EditSpecificGame;
