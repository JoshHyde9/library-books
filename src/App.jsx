import { Route, Routes } from "react-router-dom";

import { Home } from "./components/pages/Home/Home";

export const App = () => {
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/book/:bookId" element={<Book />} />
  </Routes>;
};
