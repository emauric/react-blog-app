import { useEffect, useState } from "react";
import { Link } from "react-router";
import BlogPost from "../components/blog/BlogPost.jsx";
import Card from "../components/common/Card.jsx";

function BlogPostsPage() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setError("Could not load the posts. Please try again later.");
      });
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  function getAuthorName(userId) {
    const author = users.find((user) => user.id === userId);
    return author ? author.name : "";
  }

  if (error) {
    return (
      <Card>
        <p className="text-gray-600 dark:text-gray-300 m-2">{error}</p>
      </Card>
    );
  }

  return (
    <Card>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 m-2">
        All Posts
      </h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              to={`/posts/${post.id}`}
              className="block rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <BlogPost
                title={post.title}
                content={post.body.slice(0, 100) + "..."}
                author={getAuthorName(post.userId)}
              />
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default BlogPostsPage;
