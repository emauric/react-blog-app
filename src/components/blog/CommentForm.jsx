import { useState } from "react";

function CommentForm({ onAddComment }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !text.trim()) {
      setError("Please fill in your name and a comment.");
      return;
    }

    setError("");
    onAddComment({ name: name.trim(), body: text.trim() });
    setName("");
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-2">
        <label
          htmlFor="name"
          className="block text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg p-2 w-full"
          placeholder="Your name"
        />
      </div>
      <div className="m-2">
        <label
          htmlFor="comment"
          className="block text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
        >
          Comment
        </label>
        <textarea
          id="comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg p-2 w-full"
          placeholder="Add a comment..."
          rows="4"
        ></textarea>
      </div>
      <div className="pt-2">
        <button
          type="submit"
          className="m-2 bg-orange-400 text-white p-2 rounded-xl font-bold hover:bg-orange-500 hover:cursor-pointer"
        >
          <p>Submit</p>
        </button>
      </div>
      {error && (
        <p className="m-2 text-sm font-bold text-red-500 dark:text-red-400">
          {error}
        </p>
      )}
    </form>
  );
}

export default CommentForm;
