import PropTypes from "prop-types";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cleanData } from "../../../util/cleanData";

import styles from "./Navbar.module.scss";

/**
 * @param {{search: string, setSearch: React.Dispatch<React.SetStateAction<string>>, setBooks: React.Dispatch<React.SetStateAction<{books: null, loading: boolean }>>}} props
 */
export const Navbar = ({ search, setSearch, setBooks }) => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    const fetchBooks = async () => {
      setBooks({ loading: true });
      setShow(false);
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40`
      );

      const data = await response.json();
      const cleanedData = cleanData(data.items);

      setBooks({ data: cleanedData, loading: false });

      if (!navigate("/")) {
        navigate("/");
      }
    };

    fetchBooks();
    event.preventDefault();
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setShow(!show)}>Search</li>
      </ul>
      {show && (
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Harry Potter and the..."
          />
          <button>Submit</button>
        </form>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  setSearch: PropTypes.func.isRequired,
  setBooks: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};
