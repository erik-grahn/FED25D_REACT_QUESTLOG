import { createBrowserRouter, Navigate } from "react-router";
import SpecificGamePage from "./pages/SpecificGamePage";
import NotFoundPage from "./pages/NotFoundPage";
import NewGamePage from "./pages/NewGamePage";
import RootLayout from "./components/RootLayout";
import AllGamesPage from "./pages/GamesPage";
import EditGamePage from "./pages/EditGamePage";

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/games" replace /> },
  {
    path: "/games",
    element: <RootLayout />,
    children: [
      { index: true, element: <AllGamesPage /> },
      { path: ":id", element: <SpecificGamePage /> },
      { path: "new", element: <NewGamePage /> },
      { path: ":id/edit", element: <EditGamePage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
