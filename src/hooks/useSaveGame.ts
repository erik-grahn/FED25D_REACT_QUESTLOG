import { useState } from "react";
import type { Game, GameStatus } from "../types/Game";
import { API_URL } from "../config";

type NewGame = { title: string; platform: string; status: GameStatus };

export const useSaveGame = () => {
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const createGame = async (game: NewGame) => {
    setIsSaving(true);
    try {
      const response = await fetch(`${API_URL}/games`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(game),
      });

      console.log("Game sent:", game);
      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error("Could not save game to database");
      }

      const data: Game = await response.json();

      return data;
    } catch (error) {
      console.log(error);
      setError("could not save game to database");
      throw error;
    } finally {
      setIsSaving(false);
    }
  };

  return { error, isSaving, createGame };
};
