function Card({ children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-3xl mx-4 sm:mx-auto my-8 p-4 sm:p-6">
      {children}
    </div>
  );
}

export default Card;
