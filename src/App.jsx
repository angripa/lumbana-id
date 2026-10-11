import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import HomePage from "./pages/HomePage.jsx";
import KulinerPage from "./pages/KulinerPage.jsx";
import WisataPage from "./pages/WisataPage.jsx";
import AcaraPage from "./pages/AcaraPage.jsx";
import PasarPage from "./pages/PasarPage.jsx";
import ArticlesPage from "./pages/ArticlesPage.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kuliner" element={<KulinerPage />} />
        <Route path="/wisata" element={<WisataPage />} />
        <Route path="/acara-adat" element={<AcaraPage />} />
        <Route path="/pasar" element={<PasarPage />} />
        <Route path="/artikel" element={<ArticlesPage />} />
        <Route path="/artikel/:slug" element={<ArticlePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
