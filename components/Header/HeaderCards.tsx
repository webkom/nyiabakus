import Card, { CardData, CardWrapper } from "@/components/Card";
import styles from "./styles.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";

const HeaderCards: React.FC = () => {
  return (
    <InfoSectionWrapper className={styles.header}>
      <CardWrapper>
        {cardData.map(({ title, icon, description, buttons }) => (
          <Card
            key={title}
            icon={icon}
            title={title}
            description={description}
            buttons={buttons}
          />
        ))}
      </CardWrapper>
    </InfoSectionWrapper>
  );
};

export default HeaderCards;

const cardData: CardData[] = [
  {
    title: "Facebook-gruppe for nye studenter",
    icon: "logo-facebook",
    description:
      "Det meste av informasjon til nye studenter kommer via en egen Facebook-gruppe, som det er anbefalt at du blir med i med en gang!",
    buttons: [
      {
        href: "https://www.facebook.com/groups/280352384450789/",
        text: "Gruppe for 5-årig master",
      },
    ],
  },
  {
    title: "Lag bruker på abakus.no",
    icon: "person",
    description:
      "Meld deg på arrangementer og følg med på hva som skjer i Abakus!",
    buttons: [
      {
        href: "https://www.notion.so/Hvordan-lage-bruker-p-Abakus-no-17be056689194337a1d44865f577d536",
        text: "Gå til guide",
      },
    ],
  },
  {
    title: "Bli med på Slack",
    icon: "logo-slack",
    description:
      "Hold kontakten med resten av Abakus! Her har vi alt fra event-reminders, kjøp og salg, memes og forum for å finne sted å bo.",
    buttons: [
      {
        href: "https://join.slack.com/t/abakus-ntnu/shared_invite/zt-19m96d1du-WoVE99K20g5iUeKaTGSVxw",
        text: "Åpne Slack",
      },
    ],
  },
  {
    title: "Kontaktskjema og varsling",
    icon: "chatbox",
    description:
      "Har du noe du vil si ifra om? Meld fra gjennom kontaktskjemaet vårt! Vi har også en varslingsportal for ubehagelige hendelser og avvik. \nDu kan være helt anonym dersom du ønsker det.",
    buttons: [
      {
        href: "https://abakus.no/contact",
        text: "Gå til kontaktskjema",
      },
      {
        href: "https://avvik.abakus.no",
        text: "Gå til varslingsportal",
      },
    ],
  },
  {
    title: "Følg oss på Instagram",
    icon: "logo-instagram",
    description:
      "@abakusntnu - For jevnlig oppdateringer i både fadderuken og det påfølgende semesteret\n@abakusbedrift - For å holde deg oppdatert på relevante bedrifter og bedriftsarrangementer\n@labambakjelleren - Kjelleren til linjeforeningen",
  },
];
