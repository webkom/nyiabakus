import Link from "@/components/Link";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        setIsSticky(e.intersectionRatio < 1);
      },
      { threshold: [1] }
    );
    if (stickyRef.current) observer.observe(stickyRef.current);
    return () => {
      observer.disconnect();
    };
  }, [isSticky, stickyRef]);
  return (
    <>
      <h3 className={styles.quickLinksHeader}>
        Hopp direkte til det du vil lese om
      </h3>
      <div
        ref={stickyRef}
        className={`${styles.stickyWrapper} ${isSticky ? styles.isSticky : ""}`}
      >
        <div className={styles.quickLinks}>
          <Link className={styles.toTopLink} href="#">
            Til toppen
          </Link>
          <Link className={styles.quickLink} href={"#før-trondheim"}>
            Før du kommer til Trondheim
          </Link>
          <Link className={styles.quickLink} href={"#trondheim"}>
            I Trondheim
          </Link>
          <Link className={styles.quickLink} href={"#fadderperioden"}>
            Fadderperioden
          </Link>
          <Link className={styles.quickLink} href={"#studiestart"}>
            Studiestart
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
