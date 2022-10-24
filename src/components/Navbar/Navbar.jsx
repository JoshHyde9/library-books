import { useState } from "react";

import styles from "./Navbar.module.scss";

export const Navbar = () => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(search);
  };

  return (
    <nav className={styles.nav}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Harry Potter and the..."
        />
        <button>Submit</button>
      </form>
    </nav>
  );
};
