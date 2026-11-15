import { useContext } from "react";
import { Route, Routes } from "react-router";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import BlogPostsPage from "./pages/BlogPostsPage.jsx";
import IndividualPostPage from "./pages/IndividualPostPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { ThemeContext } from "./context/ThemeContext.js";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`App bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col ${theme === "dark" ? "dark" : ""}`}
    >
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<BlogPostsPage />} />
        <Route path="/posts/:id" element={<IndividualPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
