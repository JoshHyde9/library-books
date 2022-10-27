import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Loader } from "../../components/Loader/Loader";
import { BookInfo } from "../../components/BookInfo/BookInfo";

import { cleanData } from "../../util/cleanData";

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

        const cleanedData = cleanData(data.volumeInfo);

        setBook(cleanedData);
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
        <img
          src={
            book.imageLinks
              ? book.imageLinks.thumbnail
              : "https://placehold.jp/989898/ffffff/250x350.png?text=Cover%20not%20found"
          }
          alt={book.title}
        />
      </div>
      <BookInfo book={book} />
    </div>
  );
};
