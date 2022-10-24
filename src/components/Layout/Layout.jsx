import React, { useState } from "react";
import { App } from "../../App";

import { Navbar } from "../Navbar/Navbar";

import styles from "./Layout.module.scss";

export const Layout = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState({ books: null, loading: false });

  return (
    <>
      <Navbar setBooks={setBooks} search={search} setSearch={setSearch} />
      <main className={styles.main}>
        {React.cloneElement(<App />, { books })}
      </main>
    </>
  );
};
