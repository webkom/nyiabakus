import styles from "./styles.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";
import Card, { CardData, CardWrapper } from "@/components/Card";
import Link from "@/components/Link";

const InfoSectionStudy = () => {
  return (
    <InfoSectionWrapper id="studiestart">
      <h2 className={styles.title}>Studiestart</h2>
      <p>
        Etterhvert som Fadderperioden går mot slutten starter din nye hverdag
        som student. Da vil det meste av faglig informasjon komme via{" "}
        <Link href={"https://ntnu.blackboard.com"}>BlackBoard</Link>, men det
        finnes også en del andre spennende ressurser vi anbefaler deg å sjekke
        ut.
      </p>
      <p>
        Hvis du ønsker enda mer informasjon om tilbudet i trondheim generelt,
        sjekk ut <Link href={"https://nyitrondheim.no"}>nyitrondheim.no</Link>.
      </p>
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

export default InfoSectionStudy;

const cardData: CardData[] = [
  {
    title: "Abakus.no",
    icon: "ellipse",
    description:
      "Bedriftspresentasjoner, fester, kurs, lavterskel arrangementer, artikler, jobbannonser og mye mer!",
    buttons: [
      {
        href: "https://abakus.no",
        text: "Gå til abakus.no",
      },
    ],
  },
  {
    title: "Instabart",
    icon: "link",
    description:
      "Du finner en rask samling av lenker til ting du har bruk for på instabart.no",
    buttons: [
      {
        href: "https://instabart.no",
        text: "Gå til instabart",
      },
    ],
  },
  {
    title: "Ababart",
    icon: "link",
    description:
      "Oversikt over de forskjellige tjenestene som er laget av og for Abakus på aba.wtf",
    buttons: [
      {
        href: "https://aba.wtf",
        text: "Gå til aba.wtf",
      },
    ],
  },
  {
    title: "Data-start",
    icon: "link",
    description:
      "Lignende instabart, men er litt nyere og rettet mot studenter innen IT",
    buttons: [
      {
        href: "https://data-start.vercel.app",
        text: "Gå til data-start",
      },
    ],
  },
  {
    title: "Tips og triks abakus.no",
    icon: "build",
    description:
      "Tips&triks som kan gjøre det enklere å holde kontroll på hva som skjer i linjeforeningen",
    buttons: [
      {
        href: "/faq#tips",
        text: "Les mer",
      },
    ],
  },
  {
    title: "Verv",
    icon: "people",
    description:
      "Omtrent mot slutten av Fadderperioden finnes det masse verv som har opptak. I Abakus er det opptak til Komitéer og revy, men det er også mye som skjer på Samfundet, UKA, NTNUI, +++",
    buttons: [
      {
        href: "https://nyitrondheim.no/verv-deg",
        text: "Les mer på nyitrondheim.no",
      },
    ],
  },
];
