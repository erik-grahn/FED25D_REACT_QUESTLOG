export type GameStatus = "want-to-play" | "playing" | "completed" | "dropped";

export type Game = {
  id: string;
  title: string;
  platform: string;
  status: GameStatus;
  rating?: number;
  coverUrl?: string;
  notes?: string;
};
