import Card from "@/components/Card";
import styles from "./styles.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";

const HeaderCards = () => {
  return (
    <InfoSectionWrapper className={styles.header}>
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

export default HeaderCards;
