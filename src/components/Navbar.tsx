import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="p-4 border-b flex">
      {location.pathname !== "/games" && (
        <Link to={"/games"}>
          <p className="text-md w-42 p-4 border-4 border-game-border rounded-sm hover:bg-game-input active:bg-game-border active:text-game-bg">
            Go to all games
          </p>
        </Link>
      )}
      {location.pathname !== "/games/new" && (
        <Link to={"/games/new"}>
          <p className="text-md w-42 p-4 border-4 border-game-border rounded-sm hover:bg-game-input active:bg-game-border active:text-game-bg">
            Add new game
          </p>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
