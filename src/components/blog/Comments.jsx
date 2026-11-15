import { useEffect, useState } from "react";
import CommentForm from "./CommentForm.jsx";

function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => {
        console.error("Error fetching comments:", error);
        setError("Could not load the comments. Please try again later.");
      });
  }, [postId]);

  function addComment(comment) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId: Number(postId), ...comment }),
    })
      .then((response) => response.json())
      .then((data) => setComments([...comments, { ...data, id: Date.now() }]))
      .catch((error) => console.error("Error posting comment:", error));
  }

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 p-2">
        Comments
      </h3>
      <CommentForm onAddComment={addComment} />
      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 p-2 mx-2">
        Existing Comments
      </h3>
      {error && <p className="text-gray-700 dark:text-gray-300 p-2 mx-2">{error}</p>}
      {!error &&
        (comments.length === 0 ? (
          <p className="text-gray-700 dark:text-gray-300 p-2 mx-2">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          <ul className="p-2 mx-2">
            {comments.map((comment) => (
              <li
                key={comment.id}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 my-2"
              >
                <p className="text-sm font-bold text-gray-800 dark:text-gray-100">
                  {comment.name}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {comment.body}
                </p>
              </li>
            ))}
          </ul>
        ))}
    </div>
  );
}

export default Comments;
