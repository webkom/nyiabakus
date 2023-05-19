import Link from "next/link";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Link href={"/"}>Ta meg til Abakus</Link>
        <Link href={"/"}>Startside</Link>
        <Link href={"/"}>Arrangementer</Link>
        <Link href={"/"}>FAQ</Link>
      </div>
    </div>
  );
};

export default Navbar;
