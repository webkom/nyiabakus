import Link from "next/link";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.contentWrapper}>
        <div className={styles.logoWrapper}>
          <Link href={"https://abakus.no"}>Gå til abakus.no</Link>
        </div>
        <div className={styles.navLinksWrapper}>
          <Link href={"/"}>Startside</Link>
          <Link href={"/events"}>Fadderperioden</Link>
          <Link href={"/faq"}>FAQ</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
