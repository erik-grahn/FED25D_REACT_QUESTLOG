import { useState, useEffect } from "react";
import { API_URL } from "../config";
import type { Game } from "../types/Game";

export const useGames = (status: string) => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGames() {
      try {
        setIsLoading(true);
        setError(null);
        const url =
          status === "all" ?
            `${API_URL}/games`
          : `${API_URL}/games?status=${status}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Could not fetch games from database");
        }

        const data: Game[] = await response.json();

        setGames(data);
      } catch (error) {
        console.log(error);
        setError("Could not fetch game from database");
      } finally {
        setIsLoading(false);
      }
    }
    fetchGames();
  }, [status]);

  return { games, isLoading, error };
};
