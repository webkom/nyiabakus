import Link from "next/link";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.contentWrapper}>
        <div className={styles.navLinksWrapper}>
          <Link href={"/"}>Startside</Link>
          <Link href={"/fadderperioden"}>Fadderperioden</Link>
          <Link href={"/masterfadderperioden"}>Masterfadderperioden</Link>
          <Link href={"/innbyttere"}>Innbyttere</Link>
          <Link href={"/faq"}>FAQ</Link>
          <Link href={"/om-abakus"}>Om Abakus</Link>
        </div>
        <div className={styles.logoWrapper}>
          <Link href={"https://abakus.no"}>✨Gå til abakus.no✨</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
