import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <>
      <h1>404 – Page not found</h1>
      <Link to="/games">Back to all games</Link>
    </>
  );
};

export default NotFoundPage;
