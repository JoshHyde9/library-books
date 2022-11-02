import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { BookCard } from "../BookCard/BookCard";
import { Loader } from "../Loader/Loader";

import styles from "./RandomSearch.module.scss";

export const RandomSearch = () => {
  const [books, setBooks] = useState({ books: [], loading: true });
  const [category, setCategory] = useState("");

  const getRandomCategory = () => {
    const categoryArray = [
      "Action and adventure",
      "Art",
      "Alternate history",
      "Autobiography",
      "Anthology",
      "Biography",
      "Business",
      "Children's",
      "Crafts",
      "Classic",
      "Cookbook",
      "Comic book",
      "Diary",
      "Dictionary",
      "Crime",
      "Encyclopedia",
      "Drama",
      "Guide",
      "Fairytale",
      "Health",
      "Fantasy",
      "History",
      "Graphic novel",
      "Home and garden",
      "Historical fiction",
      "Humor",
      "Horror",
      "Journal",
      "Mystery",
      "Math",
      "Paranormal romance",
      "Memoir",
      "Picture book",
      "Philosophy",
      "Poetry",
      "Prayer",
      "Political thriller",
      "Religion",
      "Romance",
      "Textbook",
      "Satire",
      "True crime",
      "Science fiction",
      "Review",
      "Short story",
      "Science",
      "Suspense",
      "Self help",
      "Thriller",
      "Sports and leisure",
      "Western",
      "Travel",
      "Young adult",
      "True crime",
    ];
    return categoryArray[Math.floor(Math.random() * categoryArray.length)];
  };

  useEffect(() => {
    const fetchCategory = async () => {
      const randomCategory = getRandomCategory();
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${randomCategory}`
      );

      const data = await response.json();

      setCategory(randomCategory);
      setBooks({ books: data.items, loading: false });
    };
    fetchCategory();
  }, []);

  if (books.loading) {
    return <Loader width="100px" hexColor="ab987a" />;
  }

  return (
    <div>
      <h1 className={styles.heading}>Popular in {category}</h1>
      <div className={styles.gallery}>
        {books.books.map((book) => (
          <Link key={book.id} to={`/book/${book.id}`}>
            <BookCard volumeInfo={book.volumeInfo} />
          </Link>
        ))}
      </div>
    </div>
  );
};
