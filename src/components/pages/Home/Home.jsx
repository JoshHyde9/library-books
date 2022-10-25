import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { BookCard } from "../../BookCard/BookCard";
import { BooksContext } from "../../Layout/Layout";
import { Loader } from "../../Loader/Loader";

import styles from "./Home.module.scss";

export const Home = () => {
  const books = useContext(BooksContext);

  const { data, loading } = books;

  if (!data && !loading) {
    return <p>Try searching for a book.</p>;
  }

  if (loading && !data) {
    return <Loader width="100px" hexColor="ff00ff" />;
  }

  return (
    <div className={styles.gallery}>
      {data.map((book) => (
        <Link key={book.id} to={`/book/${book.id}`}>
          <BookCard volumeInfo={book.volumeInfo} />
        </Link>
      ))}
    </div>
  );
};

Home.propTypes = {
  books: PropTypes.shape({
    data: PropTypes.array,
    loading: PropTypes.bool,
  }),
};
