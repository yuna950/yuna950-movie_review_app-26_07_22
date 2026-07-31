import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./pages/search/Search";

import Detail from "./pages/datail/Detail";

export default function Router() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path={`/detail/:id`} element={<Detail />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
