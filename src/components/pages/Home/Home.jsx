import PropTypes from "prop-types";

import { BookCard } from "../../BookCard/BookCard";

import styles from "./Home.module.scss";
import { Loader } from "../../Loader/Loader";

export const Home = ({ books }) => {
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

Home.propTypes = {
  books: PropTypes.shape({
    data: PropTypes.array,
    loading: PropTypes.bool,
  }),
};
