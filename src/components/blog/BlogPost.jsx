function BlogPost({ title, content, author, date }) {
  return (
    <div className="m-2">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 my-2">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 my-2">{content}</p>
      {author && (
        <div className="flex items-center space-x-2">
          <p className="text-sm font-bold text-gray-800 dark:text-gray-100">
            Author:
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400"> {author}</p>
        </div>
      )}
      {date && (
        <div className="flex items-center space-x-2">
          <p className="text-sm font-bold text-gray-800 dark:text-gray-100">
            Date:
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
        </div>
      )}
    </div>
  );
}

export default BlogPost;
