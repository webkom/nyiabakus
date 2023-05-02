import Link from "next/link";
import Card from "../Card";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Velkommen til Abakus</h1>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <div>
        <h3>Hopp til det du vil lese om eller scroll videre</h3>
        <div>
          <Link href={"/"}>Før du kommer til Trondheim</Link>
          <Link href={"/"}>I Trondheim</Link>
          <Link href={"/"}>Fadderperioden</Link>
          <Link href={"/"}>Studiestart</Link>
        </div>
      </div>
      <div>
        <Card
          title={"Lag bruker på abakus.no"}
          text={
            "Meld deg på arrangementer og følg med på hva som skjr i Abakus!"
          }
        />
        <Card
          title={"Bli med på Slack"}
          text={
            "Hold kontakten med resten av Abakus! Heer har vi alt fra event-reminders, kjøp og salg, memes og fprum for å finne sted å bo."
          }
        />
        <Card
          title={"Meldeskjema"}
          text={
            "Hold kontakten med resten av Abakus! Her er meldeskjema om det skulle skje no."
          }
        />
      </div>
    </div>
  );
};

export default Header;
