import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Book } from "./pages/Book/Book";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/:bookId" element={<Book />} />
    </Routes>
  );
};
