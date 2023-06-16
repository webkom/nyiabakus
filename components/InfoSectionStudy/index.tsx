import styles from "./styles.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";
import Card, { CardData, CardWrapper } from "@/components/Card";
import Link from "next/link";

const InfoSectionStudy = () => {
  return (
    <InfoSectionWrapper id="studiestart">
      <h2 className={styles.title}>Studiestart</h2>
      <p>
        Etterhvert som fadderperioden går mot slutten starter din nye hverdag
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

export default InfoSectionStudy;

const cardData: CardData[] = [
  {
    title: "Abakus.no",
    icon: "ellipse",
    description:
      "Bedriftspresentasjoner, fester, kurs, lavterskel arrangementer, artikler, jobbannonser og mye mer!",
    buttonHref: "https://abakus.no",
    buttonText: "Gå til abakus.no",
  },
  {
    title: "Instabart",
    icon: "link",
    description:
      "Du finner en rask samling av lenker til ting du har bruk for på instabart.no",
    buttonHref: "https://instabart.no",
    buttonText: "Gå til instabart",
  },
  {
    title: "Data-start",
    icon: "link",
    description:
      "Lignende instabart, men er litt nyere og rettet mot studenter innen IT.",
    buttonHref: "https://data-start.vercel.app",
    buttonText: "Gå til data-start",
  },
  {
    title: "Verv",
    icon: "people",
    description:
      "Omtrent mot slutten av fadderperioden finnes det masse verv som har opptak. I Abakus er det opptak til Komitéer og revy, men det er også mye som skjer på Samfundet, UKA, NTNUI, +++",
    buttonHref: "https://nyitrondheim.no/verv-deg",
    buttonText: "Les mer på nyitrondheim.no",
  },
];
