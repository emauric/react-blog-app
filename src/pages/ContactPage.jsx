import { useState } from "react";
import Card from "../components/common/Card.jsx";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Card>
      <div className="m-2">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 my-2">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="my-3">
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
              required
            />
          </div>
          <div className="my-3">
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg p-2 w-full"
              placeholder="Your email"
              required
            />
          </div>
          <div className="my-3">
            <label
              htmlFor="message"
              className="block text-sm font-bold text-gray-800 dark:text-gray-100 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg p-2 w-full"
              placeholder="Your message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-400 text-white p-2 rounded-xl font-bold hover:bg-orange-500 hover:cursor-pointer"
          >
            <p>Submit</p>
          </button>
        </form>
        {submitted && (
          <p className="mt-4 font-bold text-gray-800 dark:text-gray-100">
            Thanks {name}, your message has been sent!
          </p>
        )}
      </div>
    </Card>
  );
}

export default ContactPage;
