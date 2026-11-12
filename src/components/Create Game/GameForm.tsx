import { useState, type SubmitEvent } from "react";
import type { GameStatus } from "../../types/Game";

type GameFormProps = {
  onSave: (
    title: string,
    platform: string,
    status: GameStatus,
    notes?: string,
    rating?: number,
    coverUrl?: string,
  ) => Promise<void>;
  error: string | null;
  isSaving: boolean;
  initialTitle?: string;
  initialPlatform?: string;
  initialStatus?: GameStatus;
  initialNotes?: string;
  initialRating?: number;
  initialCoverUrl?: string;
  submitLabel?: string;
};

const GameForm = ({
  onSave,
  error,
  isSaving,
  initialTitle = "",
  initialPlatform = "",
  initialStatus = "want",
  initialNotes = "",
  initialRating = undefined,
  initialCoverUrl = "",
  submitLabel = "Save game",
}: GameFormProps) => {
  const [title, setTitle] = useState(initialTitle);
  const [platform, setPlatform] = useState(initialPlatform);
  const [status, setStatus] = useState<GameStatus>(initialStatus);
  const [notes, setNotes] = useState(initialNotes);
  const [rating, setRating] = useState(initialRating);
  const [coverUrl, setCoverUrl] = useState(initialCoverUrl);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);

    if (!title.trim() || !platform.trim()) {
      setFormError("Titel och plattform måste fyllas i");
      return;
    }

    try {
      await onSave(
        title.trim(),
        platform.trim(),
        status,
        notes.trim() || undefined,
        rating,
        coverUrl.trim() || undefined,
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {formError && <p>{formError}</p>}
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>

        <label>
          Platform
          <input
            type="text"
            value={platform}
            onChange={(event) => setPlatform(event.target.value)}
          />
        </label>

        <label>
          Choose status...
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value as GameStatus)}>
            <option value="want">Want to play</option>
            <option value="playing">Playing</option>
            <option value="completed">Completed</option>
            <option value="dropped">Dropped</option>
          </select>
        </label>
        <label>
          Notes
          <input
            type="text"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
          />
        </label>
        <label>
          Rating
          <select
            value={rating ?? ""}
            onChange={(event) => setRating(Number(event.target.value))}>
            <option value="" disabled>
              Choose rating
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label>
          CoverUrl
          <input
            type="text"
            value={coverUrl}
            onChange={(event) => setCoverUrl(event.target.value)}
          />
        </label>

        <button type="submit" disabled={isSaving}>
          {isSaving ? "Game is saving" : `${submitLabel}`}
        </button>
      </form>
    </div>
  );
};

export default GameForm;
