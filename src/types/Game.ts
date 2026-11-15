export type GameStatus = "want" | "playing" | "completed" | "dropped";

export type Game = {
  id: string;
  title: string;
  platform: string;
  status: GameStatus;
  rating?: number;
  coverUrl?: string;
  notes?: string;
};

export type NewGame = Omit<Game, "id">;
