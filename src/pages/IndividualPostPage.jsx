import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import BlogPost from "../components/blog/BlogPost.jsx";
import Comments from "../components/blog/Comments.jsx";
import Card from "../components/common/Card.jsx";

function IndividualPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(undefined);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data.id ? data : null))
      .catch((error) => {
        console.error("Error fetching post:", error);
        setError("Could not load this post. Please try again later.");
      });
  }, [id]);

  useEffect(() => {
    if (!post) return;

    fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [post]);

  if (error) {
    return (
      <Card>
        <p className="text-gray-600 dark:text-gray-300 m-2">{error}</p>
      </Card>
    );
  }

  if (post === undefined) {
    return null;
  }

  if (!post) {
    return (
      <Card>
        <div className="m-2">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 my-2">
            Post not found
          </h2>
          <Link to="/posts" className="text-orange-500 font-bold hover:underline">
            Back to all posts
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <BlogPost
        title={post.title}
        content={post.body}
        author={user ? user.name : ""}
      />
      {user && (
        <div className="m-2 flex items-center space-x-2">
          <p className="text-sm font-bold text-gray-800 dark:text-gray-100">
            Email:
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {user.email}
          </p>
        </div>
      )}
      <Comments postId={post.id} />
      <div className="m-2 pt-2">
        <Link to="/posts" className="text-orange-500 font-bold hover:underline">
          Back to all posts
        </Link>
      </div>
    </Card>
  );
}

export default IndividualPostPage;
