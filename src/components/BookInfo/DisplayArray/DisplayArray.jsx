import PropTypes from "prop-types";

/**
 * @param {{array?: string[], type: string}}
 */
export const DisplayArray = ({ array, type }) =>
  array ? (
    <div>
      {array.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  ) : (
    <p>No {type} listed</p>
  );

DisplayArray.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string.isRequired,
};
