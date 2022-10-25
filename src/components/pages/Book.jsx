import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/**
 *
 * @param {book: {title: string}} props
 */
export const Book = () => {
  const { bookId } = useParams();

  const [book, setBook] = useState({});

  useEffect(() => {
    const getBook = async () => {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
      );

      const data = await response.json();
      setBook(data.volumeInfo);
    };
    getBook();
  }, []);
  return (
    <div>
      <h1>This is the book's page</h1>
      {JSON.stringify(book)}
    </div>
  );
};
