import React, { useState } from "react";
import { Home } from "../pages/Home/Home";

import { Navbar } from "../Navbar/Navbar";

import styles from "./Layout.module.scss";

export const Layout = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState({ books: null, loading: false });

  return (
    <>
      <Navbar setBooks={setBooks} search={search} setSearch={setSearch} />
      <main className={styles.main}>
        {React.cloneElement(<Home />, { books })}
      </main>
    </>
  );
};
