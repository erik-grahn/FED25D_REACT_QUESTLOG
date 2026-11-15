import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <header className="pb-4 border-b flex">
      {location.pathname !== "/games" && (
        <Link to={"/games"} className="w-auto">
          <p className="flex justify-center text-md items-center mr-4 p-4 border-4 border-game-border rounded-sm hover:bg-game-input active:bg-game-border active:text-game-bg">
            All games
          </p>
        </Link>
      )}
      {location.pathname !== "/games/new" && (
        <Link to={"/games/new"}>
          <p className="flex justify-center text-md p-4 border-4 border-game-border rounded-sm hover:bg-game-input active:bg-game-border active:text-game-bg">
            Add new game
          </p>
        </Link>
      )}
    </header>
  );
};

export default Navbar;
