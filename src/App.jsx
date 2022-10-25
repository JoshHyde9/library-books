import { Route, Routes } from "react-router-dom";

import { Home } from "./components/pages/Home/Home";
import { Book } from "./components/pages/Book";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/:bookId" element={<Book />} />
    </Routes>
  );
};
