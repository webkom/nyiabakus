import Link from "next/link";
import Card from "@/components/Card";
import styles from "./styles.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";

const Header = () => {
  return (
    <InfoSectionWrapper className={styles.header}>
      <h1>Velkommen til Abakus!</h1>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <div className={styles.quickLinksWrapper}>
        <h3>Hopp direkte til det du vil lese om</h3>
        <div>
          <Link href={"#før-trondheim"}>Før du kommer til Trondheim</Link>
          <Link href={"#trondheim"}>I Trondheim</Link>
          <Link href={"#fadderperioden"}>Fadderperioden</Link>
          <Link href={"#studiestart"}>Studiestart</Link>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <Card
          title={"Lag bruker på abakus.no"}
          description={
            "Meld deg på arrangementer og følg med på hva som skjer i Abakus!"
          }
        />
        <Card
          title={"Bli med på Slack"}
          description={
            "Hold kontakten med resten av Abakus! Heer har vi alt fra event-reminders, kjøp og salg, memes og fprum for å finne sted å bo."
          }
        />
        <Card
          title={"Meldeskjema"}
          description={
            "Har du blitt utsatt for en ubehagelig hendelse? Meld fra gjennom meldeskjemaet vårt! Du kan være helt anonym derson du ønsker det."
          }
        />
      </div>
    </InfoSectionWrapper>
  );
};

export default Header;
