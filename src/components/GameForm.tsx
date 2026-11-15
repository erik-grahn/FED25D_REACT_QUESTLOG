import { useState, type SubmitEvent } from "react";
import type { GameStatus, NewGame } from "../types/Game";

type GameFormProps = {
  onSave: (game: NewGame) => Promise<void>;
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
  submitLabel = "Save",
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
      await onSave({
        title: title.trim(),
        platform: platform.trim(),
        status,
        notes: notes.trim() || undefined,
        rating,
        coverUrl: coverUrl.trim() || undefined,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-game-bg text-game-text p-6">
      {formError && <p>{formError}</p>}
      {error && <p>{error}</p>}

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-xl border border-game-border p-6 flex flex-col gap-5">
        <label className="flex items-center items-center flex-col sm:flex-row">
          <span className="pr-4">Title:</span>
          <input
            className="bg-game-input w-full px-4 py-2 rounded-sm"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>

        <label className="flex items-center flex-col sm:flex-row">
          <span className="pr-4">Platform:</span>
          <input
            className="bg-game-input w-full px-4 py-2 rounded-sm"
            type="text"
            value={platform}
            onChange={(event) => setPlatform(event.target.value)}
          />
        </label>

        <label className="flex items-center flex-col sm:flex-row">
          <span className="pr-4">Status:</span>
          <select
            className="bg-game-input w-full pl-4 py-2 rounded-sm pr-6"
            value={status}
            onChange={(event) => setStatus(event.target.value as GameStatus)}>
            <option value="want">Want to play</option>
            <option value="playing">Playing</option>
            <option value="completed">Completed</option>
            <option value="dropped">Dropped</option>
          </select>
        </label>
        <label className="flex items-center flex-col sm:flex-row">
          <span className="pr-4 align-top">Notes:</span>
          <textarea
            className="bg-game-input w-full px-4 py-2 rounded-sm"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
          />
        </label>
        <label className="flex items-center flex-col sm:flex-row">
          <span className="pr-4">Rating:</span>
          <select
            className="bg-game-input w-full pl-4 py-2 rounded-sm"
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
        <label className="flex items-center flex-col sm:flex-row">
          <span className="pr-4">CoverUrl:</span>
          <input
            className="bg-game-input w-full pl-4 py-2 rounded-sm"
            type="text"
            value={coverUrl}
            onChange={(event) => setCoverUrl(event.target.value)}
          />
        </label>
        <div className="flex items-center flex-col sm:flex-row">
          {coverUrl && <span className="pr-4">Cover preview:</span>}
          <img
            src={
              coverUrl ||
              "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
            }
            onError={(event) => {
              event.currentTarget.src =
                "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
            }}
            alt={`cover-preview of ${title}`}
            className={!coverUrl ? "hidden" : "w-32 h-auto"}
          />
        </div>
        <button
          className="self-center !w-full"
          type="submit"
          disabled={isSaving}>
          {isSaving ? "saving..." : `${submitLabel}`}
        </button>
      </form>
    </div>
  );
};

export default GameForm;
