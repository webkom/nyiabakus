import Card from "@/components/Card";
import styles from "./styles.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";

const HeaderCards: React.FC = () => {
  return (
    <InfoSectionWrapper className={styles.header}>
      <div className={styles.cardContainer}>
        {cardData.map(({ title, icon, description }) => (
          <Card
            key={title}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </InfoSectionWrapper>
  );
};

export default HeaderCards;

const cardData = [
  {
    title: "Lag bruker på abakus.no",
    icon: "person",
    description:
      "Meld deg på arrangementer og følg med på hva som skjer i Abakus!",
  },
  {
    title: "Bli med på Slack",
    icon: "logo-slack",
    description:
      "Hold kontakten med resten av Abakus! Her har vi alt fra event-reminders, kjøp og salg, memes og forum for å finne sted å bo.",
  },
  {
    title: "Meldeskjema",
    icon: "chatbox",
    description:
      "Har du blitt utsatt for en ubehagelig hendelse? Meld fra gjennom meldeskjemaet vårt! \nDu kan være helt anonym derson du ønsker det.",
  },
];
