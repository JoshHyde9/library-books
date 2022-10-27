import PropTypes from "prop-types";

/**
 *
 * @param {{array: string[], type: string}}
 */
export const DisplayArray = ({ array, type }) =>
  array ? <p>{array.map((item) => item)}</p> : <p>No {type} listed</p>;

DisplayArray.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string.isRequired,
};
