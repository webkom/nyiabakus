import Card, { CardData, CardWrapper } from "@/components/Card";
import { MTKOM } from "@/utils/constants";
import Link from "@/components/Link";
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

export default InfoSectionTrondheim;

const cardData: CardData[] = [
  {
    title: "Immatrikulering",
    icon: "school",
    description:
      "Immatrikuleringen er velkomstseremonien til NTNU. Du kan lese mer om det, samt obligatorisk opplegg, på NTNU og instituttene sine nettsider",
    buttons: [
      {
        href: "https://www.ntnu.no/studier/mtdt",
        text: "Info for Data",
      },
      {
        href: "https://www.ntnu.no/studier/mtkom",
        text: "Info for Cybdat",
      },
    ],
  },
  {
    title: "A3",
    icon: "business",
    description:
      "A3 (3. etasje på A-blokka i Realfagsbygget) er der kontoret vårt er, i tillegg til bordtennisbord og leserom der du garantert finner mange av medstudentene dine!",
    buttons: [
      { href: "https://link.mazemap.com/DNpjwD7X", text: "Finn med Mazemap" },
    ],
  },
  {
    title: "Abakus-kontoret",
    icon: "cafe",
    description:
      "I Abakus har vi vårt eget kontor på Realfagsbygget! Her kan du slappe av med Smash/Mariokart, spise lunsj eller kjøpe noe billig snacks fra kiosken vår Snack Overflow",
    buttons: [
      { href: "https://link.mazemap.com/3IOdPx0q", text: "Finn med Mazemap" },
    ],
  },
  {
    title: "Komtek-loungen",
    icon: "tv",
    description: `${MTKOM.name} sitt eget hvileområde, med kjøkkenkrok, sofa, bordtennisbord og TV`,
    buttons: [
      { href: "https://link.mazemap.com/IXgO7HUW", text: "Finn med Mazemap" },
    ],
  },
  {
    title: "Teknostart (kun 5-årig master)",
    icon: "laptop",
    description:
      "Teknostart er det obligatoriske faglige oppstarts-opplegget til instituttene. Her vil dere jobbe med faglig relevante ting i grupper, for å få en god start på studiehverdagen. Dette vil foregå på dagtid, tirsdag-fredag første uken.",
  },
];
