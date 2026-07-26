import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./pages/search/Search";
import Mypage from "./pages/mypage/Mypage";

export default function Router() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path={`/detail/:id`} element={<Mypage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
