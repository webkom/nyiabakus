import Link from "next/link";
import styles from "./styles.module.css";
import Icon from "../Icon";
import { useEffect, useState } from "react";

const links = [
  ["/", "Startside"],
  ["/fadderperioden", "Fadderperioden"],
  ["/masterfadderperioden", "Masterfadderperioden"],
  ["/innbyttere", "Innbyttere"],
  ["/faq", "FAQ"],
  ["/om-abakus", "Om Abakus"],
  ["https://abakus.no", "✨Gå til abakus.no✨"],
];

const NavLinks = ({ onClick }: { onClick?: () => void }) => (
  <>
    {links.map((link) => (
      <Link href={link[0]} key={link[0]} onClick={onClick}>
        {link[1]}
      </Link>
    ))}
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
          <NavLinks onClick={() => setDrawerOpen(false)} />
        </div>
        <span
          className={styles.drawerBackground}
          style={{
            opacity: drawerOpen ? 0.5 : 0,
            transitionDuration: animationDuration,
          }}
          onClick={() => setDrawerOpen(false)}
        />
      </div>
    </>
  );
};

export default Navbar;
