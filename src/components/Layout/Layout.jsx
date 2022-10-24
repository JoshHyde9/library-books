import { Navbar } from "../Navbar/Navbar";

import styles from "./Layout.module.scss";

export const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className={styles.main}>{children}</main>
  </>
);
