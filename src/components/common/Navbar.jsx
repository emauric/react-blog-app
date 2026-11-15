import { useEffect, useState } from "react";
import { Link } from "react-router";
import ThemeToggle from "./ThemeToggle.jsx";

function Navbar() {
  const [showPosts, setShowPosts] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 10)))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <nav className="bg-orange-400 p-4">
      <ul className="flex flex-wrap gap-x-8 gap-y-3 text-white justify-center items-center font-bold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Blog Posts</Link>
        </li>
        <li className="relative">
          <button
            onClick={() => setShowPosts(!showPosts)}
            className="hover:cursor-pointer"
          >
            Individual Post {showPosts ? "▲" : "▼"}
          </button>
          {showPosts && (
            <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-10 w-60 max-w-[80vw] bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg shadow-lg p-2">
              {posts.map((post) => (
                <li key={post.id}>
                  <Link
                    to={`/posts/${post.id}`}
                    onClick={() => setShowPosts(false)}
                    className="block rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
