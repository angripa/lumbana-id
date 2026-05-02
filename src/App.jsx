import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import HomePage from "./pages/HomePage.jsx";
import ArticlesPage from "./pages/ArticlesPage.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artikel" element={<ArticlesPage />} />
        <Route path="/artikel/:slug" element={<ArticlePage />} />
      </Routes>
    </>
  );
}
