import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

import { Loader } from "../../Loader/Loader";
import { Star } from "../../Icons/Star";

import styles from "./Book.module.scss";

export const Book = () => {
  const { bookId } = useParams();

  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState({});

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );

        const data = await response.json();
        setBook(data.volumeInfo);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getBook();
  }, []);

  if (loading) {
    return <Loader width="100px" hexColor="ff00ff" />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <img src={book.imageLinks.thumbnail} alt={book.title} />
      </div>
      <div className={styles.info}>
        <h1>{book.title}</h1>
        <div className={styles.more__info}>
          <p>{dayjs(book.publishedDate).format("YYYY")}</p>
          <span className={styles.spacer}>—</span>
          <p>{book.authors.map((author) => author)}</p>
          <span className={styles.spacer}>—</span>
          {book.categories ? (
            <p>{book.categories.map((category) => category)}</p>
          ) : (
            <p>No categories listed</p>
          )}
          <span className={styles.spacer}>—</span>
          <div className={styles.rating}>
            {book.averageRating ? (
              <>
                <Star size="24" fill="#FFD700" />
                <p>{book.averageRating}</p>
              </>
            ) : (
              <p>No ratings listed</p>
            )}
          </div>
        </div>
        <p className={styles.description}>{book.description}</p>
      </div>
    </div>
  );
};
