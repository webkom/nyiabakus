import Card from "@/components/Card";
import Link from "next/link";
import InfoSectionWrapper from "../InfoSectionWrapper";
import styles from "./styles.module.css";

const InfoSectionTrondheim: React.FC = () => {
  return (
    <InfoSectionWrapper id={"trondheim"}>
      <h2 className={styles.title}>Når du kommer til Trondheim</h2>
      <p>
        Under ligger det litt spesifikk informasjon som er nyttig for ferske
        abakuler (det er deg).
        <br />
        Hvis du vil ha enda flere triks som ny student i Trondheim har vi laget
        en samling på{" "}
        <Link href={"https://nyitrondheim.no"}>nyitrondheim.no</Link>.
      </p>
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

export default InfoSectionTrondheim;

const cardData = [
  {
    title: "Abakus-kontoret",
    icon: "cafe",
    description:
      "I Abakus har vi vårt eget kontor på Realfagsbygget! Her kan du slappe av med Smash/Mariokart, spise lunsj eller kjøpe noe billig snacks fra kiosken vår Snack Overflow",
  },
  {
    title: "Komtek-loungen",
    icon: "tv",
    description:
      "Kommunikasjonsteknologi sitt eget hvileområde, med kjøkkenkrok, sofa, bordtennisbord og TV",
  },
  {
    title: "A3",
    icon: "tennisball",
    description:
      "A3 (3. etasje på A-blokka i Realfagsbygget) er der kontoret vårt er, i tillegg til bordtennisbord og leserom der du garantert finner mange av dine medstudenter",
  },
  {
    title: "Kjelleren LaBamba",
    icon: "beer",
    description:
      "Vi har også vårt eget utested som heter LaBamba! Det ligger på Moholt, og publiserer arrangementer på abakus.no når det er åpent!",
  },
  {
    title: "Immatrikulering",
    icon: "school",
    description:
      "Immatrikuleringen er velkomstseremonien til NTNU. Du kan lese mer om det på NTNU og instituttene sine nettsider",
  },
];
