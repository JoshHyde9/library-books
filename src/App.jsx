import PropTypes from "prop-types";

import { BookCard } from "./components/BookCard/BookCard";

import styles from "./App.module.scss";
import { Loader } from "./components/Loader/Loader";

export const App = ({ books }) => {
  const { data, loading } = books;

  if (!data && !loading) {
    return <p>Try searching for a book.</p>;
  }

  if (loading && !data) {
    return <Loader width="100px" hexColor="ff00ff" />;
  }

  return (
    <div className={styles.gallery}>
      {data.map((book, i) => (
        <BookCard key={i} volumeInfo={book.volumeInfo} />
      ))}
    </div>
  );
};

App.propTypes = {
  books: PropTypes.shape({
    data: PropTypes.array,
    loading: PropTypes.bool,
  }),
};
