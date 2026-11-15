import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <>
      <h1 className="mb-4">
        404 – <span className="typing">Page not found.. :(</span>
      </h1>

      <Link to={"/games"} className="w-auto">
        <p className="flex justify-center text-md items-center mr-4 p-4 border-4 border-game-border rounded-sm hover:bg-game-input active:bg-game-border active:text-game-bg">
          Back to Games
        </p>
      </Link>
    </>
  );
};

export default NotFoundPage;
