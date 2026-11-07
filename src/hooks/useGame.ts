import { useEffect, useState } from "react";
import { API_URL } from "../config";
import type { Game } from "../types/Game";

export const useGame = (id: string) => {
  const [game, setGame] = useState<Game | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGame() {
      try {
        setIsLoading(true);
        setError(null);
        const url = `${API_URL}/games/${id}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Could not fetch game from database");
        }

        const data: Game = await response.json();

        setGame(data);
      } catch (error) {
        console.log(error);
        setError("Could not fetch game from database");
      } finally {
        setIsLoading(false);
      }
    }
    fetchGame();
  }, [id]);

  return { game, isLoading, error };
};
