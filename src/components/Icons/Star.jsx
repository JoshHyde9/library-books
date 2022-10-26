import PropTypes from "prop-types";

/**
 * Star SVG Icon
 * @param {{fill: string, size: string, stroke: string}}
 * @returns
 */
export const Star = ({ fill, size, stroke }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

Star.propTypes = {
  fill: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
