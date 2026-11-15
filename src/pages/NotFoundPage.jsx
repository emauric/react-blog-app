import { Link } from "react-router";
import Card from "../components/common/Card.jsx";

function NotFoundPage() {
  return (
    <Card>
      <div className="m-2">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 my-2">
          Page not found
        </h2>
        <Link to="/" className="text-orange-500 font-bold hover:underline">
          Back to home
        </Link>
      </div>
    </Card>
  );
}

export default NotFoundPage;
