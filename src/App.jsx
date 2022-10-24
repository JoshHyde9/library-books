import PropTypes from "prop-types";

import styles from "./App.module.scss";

export const App = ({ books }) => {
  return (
    <div>
      <h1>Hello World!</h1>
      {JSON.stringify(books)}
    </div>
  );
};

App.propTypes = {
  books: PropTypes.shape({
    books: PropTypes.object,
    loading: PropTypes.bool,
  }),
};
