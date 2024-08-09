import Link from "next/link";
import styles from "./styles.module.css";
import Icon from "../Icon";
import { useEffect, useState } from "react";

const NavLinks = () => (
  <>
    <Link href={"/"}>Startside</Link>
    <Link href={"/fadderperioden"}>Fadderperioden</Link>
    <Link href={"/masterfadderperioden"}>Masterfadderperioden</Link>
    <Link href={"/innbyttere"}>Innbyttere</Link>
    <Link href={"/faq"}>FAQ</Link>
    <Link href={"/om-abakus"}>Om Abakus</Link>
    <Link href={"https://abakus.no"}>✨Gå til abakus.no✨</Link>
  </>
);

/** Normal navbar on desktop, drawer on mobile */
const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerClosing, setDrawerClosing] = useState(false);
  const animationDuration = ".25s";
  
  // Needed for correct timing
  useEffect(() => {
    setDrawerClosing(drawerOpen);
  }, [drawerOpen]);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navLinksWrapper}>
          <NavLinks />
        </div>
        <div className={styles.iconWrapper} onClick={() => setDrawerOpen(true)}>
          <Icon name="menu-outline" />
        </div>
      </div>
      <div
        className={styles.drawer}
        style={{
          width: drawerOpen ? "100%" : 0,
          transitionDelay: drawerClosing ? animationDuration : "0s",
        }}
      >
        <div
          className={styles.drawerLinksWrapper}
          style={{
            width: drawerOpen ? "75%" : 0,
            transitionDuration: animationDuration,
          }}
        >
          <NavLinks />
        </div>
        <span
          className={styles.drawerBackground}
          onClick={() => setDrawerOpen(false)}
        />
      </div>
    </>
  );
};

export default Navbar;
