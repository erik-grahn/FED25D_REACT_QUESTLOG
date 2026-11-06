import { createBrowserRouter } from "react-router";
import SpecificGamePage from "./pages/SpecificGamePage";
import NotFoundPage from "./pages/NotFoundPage";
import NewGamePage from "./pages/NewGamePage";
import Layout from "./components/RootLayout";
import AllGamesPage from "./pages/GamesPage";

export const router = createBrowserRouter([
  {
    path: "/games",
    element: <Layout />,
    children: [
      { index: true, element: <AllGamesPage /> },
      { path: ":id", element: <SpecificGamePage /> },
      { path: "new-game", element: <NewGamePage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
