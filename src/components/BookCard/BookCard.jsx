import PropTypes from "prop-types";
import dayjs from "dayjs";

import styles from "./BookCard.module.scss";

/**
 * @param {{volumeInfo: {imageLinks: string[], title: string, authors: string[], publishedDate: string, description: string}}} props
 */
export const BookCard = ({ volumeInfo }) => {
  const { imageLinks, title, authors, publishedDate, description } = volumeInfo;

  return (
    <div className={styles.gallery__item}>
      <img
        src={
          imageLinks
            ? imageLinks.thumbnail
            : "https://placehold.jp/989898/ffffff/150x200.png?text=Cover%20not%20found"
        }
        alt={title}
      />
      <div className={styles.gallery__item___info}>
        <h2>
          {title ? (
            title.length > 25 ? (
              `${title.substring(0, 25)}...`
            ) : (
              title
            )
          ) : (
            <p>No title was found</p>
          )}
        </h2>
        <h3>
          {authors ? `${authors[0]} —` : ""}{" "}
          {dayjs(publishedDate).format("YYYY")}
        </h3>
        <p>
          {description ? (
            description.length > 150 ? (
              `${description.substring(0, 150)}...`
            ) : (
              description
            )
          ) : (
            <p>No description was found</p>
          )}
        </p>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  volumeInfo: PropTypes.shape({
    title: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string),
    publisher: PropTypes.string,
    publishedDate: PropTypes.string,
    canonicalVolumeLink: PropTypes.string,
    description: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    pageCount: PropTypes.number,
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string,
    }),
  }),
};
