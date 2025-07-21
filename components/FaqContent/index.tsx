import Link from "@/components/Link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InfoSectionWrapper from "../InfoSectionWrapper";
import styles from "./styles.module.css";

const FaqContent: React.FC = () => {
  const { asPath, replace } = useRouter();
  const [hash, setHash] = useState<string>();

  useEffect(() => setHash(asPath.split("#")[1]), [asPath]);

  const renderFaqItems = (faqItems: FaqItem[]) =>
    faqItems.map(({ title, key, content, subItem }) => (
      <div
        className={`${styles.faqItem} ${subItem ? styles.subItem : ""}`}
        key={key}
      >
        <details open={hash === key}>
          <summary onClick={() => replace("#" + key)}>{title}</summary>
          {typeof content === "string"
            ? content
                .split("\n")
                .map((contentLine) => <p key={contentLine}>{contentLine}</p>)
            : content}
        </details>
      </div>
    ));

  return (
    <InfoSectionWrapper>
      <h2 className={styles.title}>FAQ</h2>
      {renderFaqItems(generalFaqItems)}
      <p>
        Lurer du på noe mer? Send en mail til Webkom på{" "}
        <Link href="mailto:webkom@abakus.no">webkom@abakus.no</Link>, så hjelper
        vi deg finne svaret - og legger det ut her så andre også kan finne det.
      </p>
    </InfoSectionWrapper>
  );
};

export default FaqContent;

interface FaqItem {
  title: string;
  key: string;
  content: React.ReactNode;
  subItem?: boolean;
}

const generalFaqItems: FaqItem[] = [
  {
    title: "Hva er en linjeforening?",
    key: "linjeforening",
    content:
      "En linjeforening er en forening av og for studentene som går ett eller flere studier. I Trondheim finnes det derfor veldig mange forskjellige linjeforeninger - men du forholder deg hovedsakelig kun til den studieretningen din tilhører.",
  },
  {
    title: "Hvordan lage bruker på abakus.no?",
    key: "lag-bruker",
    content: (
      <p>
        Vi har laget en guide som ligger her;{" "}
        <Link href="https://www.notion.so/Hvordan-lage-bruker-p-Abakus-no-17be056689194337a1d44865f577d536">
          hvordan lage bruker på abakus.no
        </Link>
      </p>
    ),
  },
  {
    title: "Pakkeliste til Fadderperioden",
    key: "pakkeliste",
    content:
      "Til Fadderperioden er det en del arrangementer som har tema, som det kan være smart å tenke på før du reiser hjemmefra.\n\n- Hvitt laken uten stretch\n- Outfit til Ops, jeg kom feil\n- Hippieklær\n- Bevegelige klær som tåler å bli våte\n- Dress/Gallakjole\n- Tysk Techno",
  },
  {
    title: "Kontaktinformasjon",
    key: "kontakt",
    content: (
      <div>
        <p>
          Leder av Abakus:
          <br />
          Torjus Østensen, 46744072, torjus.ostensen@abakus.no
        </p>
        <p>
          Leder av Arrangementskomiteen til Abakus:
          <br />
          Leo Lie McGrath, 407 81 818, leo.mcgrath@abakus.no
        </p>
        <p>
          Ansvarlig for kommunikasjon med faddere og fadderbarn:
          <br />
          Andrea Udnæs, 411 31 432, andrea.udnaes@abakus.no
        </p>
        <p>
          Ansvarlig for kommunikasjon med faddere og fadderbarn:
          <br />
          Eivind Geiran, 983 04 768, eivind.geiran@abakus.no 
        </p>
      </div>
    ),
  },
  {
    title: "Tips & triks på abakus.no",
    key: "tips",
    content: (
      <div>
        <h3>Få Abakus-arrangementer rett i kalenderen din</h3>
        <p>
          I studielivet skjer det mye rart, og da er det nyttig å ha kontroll på
          hva som skjer når!
        </p>
        <p>
          Om du går inn på{" "}
          <Link href="https://abakus.no/events">abakus.no/events</Link> på PC og
          blar helt nederst på siden, får du alternativene mellom tre mulige
          kalendere. Enten alle arrangementer, alle registreringstidspunkter
          (påmeldingstidspunkt) eller dine møter og favorittarrangementer.
        </p>
        <p>
          De to første kan fort bli overvelmende, men den siste inkluderer alle
          arrangementer der du er påmeldt eller på venteliste, og de du manuelt
          har lagt til som favoritt (ved å trykke på stjernen ved siden av
          navnet til arrangementet på abakus.no).
        </p>
        <p>
          Ved å trykke på lenkene kan du enten få kalenderene rett inn i Google
          Kalender eller hvilken som helst annen kalender som støtter iCalendar
          (så godt som alle).
        </p>
      </div>
    ),
  },
];
