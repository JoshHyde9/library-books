import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Loader } from "../Loader/Loader";

export const Book = () => {
  const { bookId } = useParams();

  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({});

  useEffect(() => {
    setLoading(true);
    const getBook = async () => {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
      );

      const data = await response.json();
      setBook(data.volumeInfo);
      setLoading(false);
    };
    getBook();
  }, []);

  if (loading) {
    return <Loader width="100px" hexColor="ff00ff" />;
  }

  return (
    <div>
      <h1>This is the book's page</h1>
      {JSON.stringify(book)}
    </div>
  );
};
