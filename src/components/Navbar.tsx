import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-4 border-b">
      <Link to={"/games/new"}>
        <p>Add new game</p>
      </Link>
    </div>
  );
};

export default Navbar;
