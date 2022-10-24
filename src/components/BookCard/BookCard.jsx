import PropTypes from "prop-types";
import dayjs from "dayjs";

import styles from "./BookCard.module.scss";

export const BookCard = ({ volumeInfo }) => {
  const { imageLinks, title, publisher, publishedDate, description } =
    volumeInfo;

  return (
    <div className={styles.gallery__item}>
      <img src={imageLinks.thumbnail} alt={title} />
      <div className={styles.gallery__item___info}>
        <h2>{title}</h2>
        <h3>
          {publisher} {dayjs(publishedDate).format("YYYY")}
        </h3>
        <p>{description && `${description.slice(0, 150)}...`}</p>
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
