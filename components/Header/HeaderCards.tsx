import Card from "@/components/Card";
import styles from "./styles.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";

const HeaderCards = () => {
  return (
    <InfoSectionWrapper className={styles.header}>
      <div className={styles.cardContainer}>
        <Card
          icon={"person"}
          title={"Lag bruker på abakus.no"}
          description={
            "Meld deg på arrangementer og følg med på hva som skjer i Abakus!"
          }
        />
        <Card
          icon={"logo-slack"}
          title={"Bli med på Slack"}
          description={
            "Hold kontakten med resten av Abakus! Heer har vi alt fra event-reminders, kjøp og salg, memes og forum for å finne sted å bo."
          }
        />
        <Card
          icon={"chatbox"}
          title={"Meldeskjema"}
          description={
            "Har du blitt utsatt for en ubehagelig hendelse? Meld fra gjennom meldeskjemaet vårt! \nDu kan være helt anonym derson du ønsker det."
          }
        />
      </div>
    </InfoSectionWrapper>
  );
};

export default HeaderCards;
