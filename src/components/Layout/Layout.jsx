import React, { createContext, useState } from "react";

import { Navbar } from "../Navbar/Navbar";

import styles from "./Layout.module.scss";

export const BooksContext = createContext();

/**
 * @param {{children: React.ReactNode}} props
 */
export const Layout = ({ children }) => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState({ books: null, loading: false });

  return (
    <>
      <Navbar setBooks={setBooks} search={search} setSearch={setSearch} />
      <BooksContext.Provider value={books}>
        <main className={styles.main}>{children}</main>
      </BooksContext.Provider>
    </>
  );
};
