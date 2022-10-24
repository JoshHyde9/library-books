import PropTypes from "prop-types";

import styles from "./Navbar.module.scss";

export const Navbar = ({ search, setSearch, setBooks }) => {
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    const fetchBooks = async () => {
      setBooks({ loading: true });
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search}`
      );

      const data = await response.json();
      setBooks({ data: data.items, loading: false });
    };

    fetchBooks();
    event.preventDefault();
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

Navbar.propTypes = {
  setSearch: PropTypes.func.isRequired,
  setBooks: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};
