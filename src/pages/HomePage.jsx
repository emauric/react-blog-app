import { Link } from "react-router";
import Card from "../components/common/Card.jsx";

function HomePage() {
  return (
    <Card>
      <div className="m-2">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 my-2">
          Welcome to Maurice's Blog
        </h2>
        <p className="text-gray-600 dark:text-gray-300 my-2">
          This is the home page ;)
        </p>
        <Link
          to="/posts"
          className="inline-block mt-2 bg-orange-400 text-white px-3 py-1 rounded-xl font-bold hover:bg-orange-500"
        >
          Read the blog
        </Link>
      </div>
    </Card>
  );
}

export default HomePage;
