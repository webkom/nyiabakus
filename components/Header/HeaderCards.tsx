import Card, { CardWrapper } from "@/components/Card";
import styles from "./styles.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";

const HeaderCards: React.FC = () => {
  return (
    <InfoSectionWrapper className={styles.header}>
      <CardWrapper>
        {cardData.map(
          ({ title, icon, description, buttonHref, buttonText }) => (
            <Card
              key={title}
              icon={icon}
              title={title}
              description={description}
              buttonHref={buttonHref}
              buttonText={buttonText}
            />
          )
        )}
      </CardWrapper>
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
    buttonHref:
      "https://www.notion.so/Hvordan-lage-bruker-p-Abakus-no-17be056689194337a1d44865f577d536",
    buttonText: "Gå til guide",
  },
  {
    title: "Bli med på Slack",
    icon: "logo-slack",
    description:
      "Hold kontakten med resten av Abakus! Her har vi alt fra event-reminders, kjøp og salg, memes og forum for å finne sted å bo.",
    buttonHref:
      "https://join.slack.com/t/abakus-ntnu/shared_invite/zt-19m96d1du-WoVE99K20g5iUeKaTGSVxw",
    buttonText: "Åpne Slack",
  },
  {
    title: "Meldeskjema",
    icon: "chatbox",
    description:
      "Har du blitt utsatt for en ubehagelig hendelse? Meld fra gjennom meldeskjemaet vårt! \nDu kan være helt anonym dersom du ønsker det.",
    buttonHref: "https://abakus.no/contact",
    buttonText: "Gå til meldeskjema",
  },
];
