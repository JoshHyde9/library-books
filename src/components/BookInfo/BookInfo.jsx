import PropTypes from "prop-types";
import dayjs from "dayjs";

import { Star } from "../Icons/Star";

import styles from "./BookInfo.module.scss";
import { DisplayArray } from "./DisplayArray/DisplayArray";

/**
 * @param {{book: {title: string, publishedDate: string, authors?: string[], averageRating?: number, categories?: string[], description: string}}} props
 */
export const BookInfo = ({
  book: {
    title,
    publishedDate,
    authors,
    averageRating,
    categories,
    description,
  },
}) => {
  return (
    <div className={styles.info}>
      <h1>{title}</h1>
      <div className={styles.more__info}>
        <p>{dayjs(publishedDate).format("YYYY")}</p>
        <span className={styles.spacer}>—</span>
        <DisplayArray array={authors} type="authors" />
        <span className={styles.spacer}>—</span>
        <DisplayArray array={categories} type="categories" />
        <span className={styles.spacer}>—</span>
        <div className={styles.rating}>
          {averageRating ? (
            <>
              <Star size="24" fill="#FFD700" />
              <p>{averageRating}</p>
            </>
          ) : (
            <p>No ratings listed</p>
          )}
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

BookInfo.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    averageRating: PropTypes.number,
    categories: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string.isRequired,
  }).isRequired,
};
