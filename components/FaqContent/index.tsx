import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import InfoSectionWrapper from "../InfoSectionWrapper";
import styles from "./styles.module.css";

const FaqContent: React.FC = () => {
  const { asPath, replace } = useRouter();
  const [hash, setHash] = useState<string>();

  useEffect(() => setHash(asPath.split("#")[1]), [asPath]);

  return (
    <InfoSectionWrapper>
      {faqItems.map(({ title, key, content }) => (
        <div className={styles.faqItem} key={key}>
          <details open={hash === key}>
            <summary onClick={() => replace("#" + key)}>{title}</summary>
            {typeof content === "string"
              ? content
                  .split("\n")
                  .map((contentLine) => <p key={contentLine}>{contentLine}</p>)
              : content}
          </details>
        </div>
      ))}
      <p>
        Lurer du på noe mer? Send en mail til Webkom på{" "}
        <a href="mailto:webkom@abakus.no">webkom@abakus.no</a>, så hjelper vi
        deg finne svaret - og legger det ut her så andre også kan finne det.
      </p>
    </InfoSectionWrapper>
  );
};

export default FaqContent;

interface FaqItem {
  title: string;
  key: string;
  content: React.ReactNode;
}

const faqItems: FaqItem[] = [
  {
    title: "Hva er en linjeforening?",
    key: "linjeforening",
    content:
      "En linjeforening er en forening av og for studentene som går ett eller flere studier. I Trondheim finnes det derfor veldig mange forskjellige linjeforeninger - men du forholder deg hovedsakelig kun til den studieretningen din tilhører.",
  },
  {
    title: "Hva består Abakus av?",
    key: "abakus",
    content: (
      <div>
        <p>Abakus består av omtrent 1000 studenter, fra Komtek og Data.</p>
        <p>
          Innad i disse har vi et Hovedstyre, 10 komitéer, 1 revy, 5
          undergrupper og masse interessegrupper.
        </p>
        <br />
        <p>
          På <a href="https://abakus.no/pages/info-om-abakus">Om Abakus</a>{" "}
          finner du det aller meste av informasjon om linjeforeningen vår. Under
          har vi lenket til noen nyttige steder å starte om du er nysgjerrig.
        </p>
        <p>
          <a href="https://abakus.no/pages/styrer/12">Les mer om Hovedstyret</a>
        </p>
        <p>
          <a href="https://abakus.no/pages/komiteer/4">
            Les mer om komitéene (siden lenker til Arrangementskomitéen, se i
            menyen for å finne resten av komitéene)
          </a>
        </p>
        <p>
          <a href="https://abakus.no/pages/grupper/104-revyen">
            Les mer om revyen
          </a>
        </p>
        <p>
          <a href="https://abakus.no/pages/grupper/31-undergrupper">
            Les mer om undergrupper
          </a>
        </p>
        <p>
          <a href="https://abakus.no/pages/grupper/39-praktisk-informasjon">
            Les mer om interessegrupper
          </a>
        </p>
        <p>
          <a href="https://abakus.no/interest-groups">
            Finn alle interessegruppene
          </a>
          <br />
          NB: Interessegruppene pleier å kommunisere via Facebook - dette står
          det informasjon om inne på siden til den enkelte interessegruppen. Om
          du skal finne dem på Facebook skal alle gruppene innholde &quot;Abakus
          interessegruppe&quot; i navnet for å være lettere å søke etter.
        </p>
      </div>
    ),
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
    title: "Pakkeliste til fadderperioden",
    key: "pakkeliste",
    content:
      "Til fadderperioden er det en del arrangementer som har tema, som det kan være smart å tenke på før du reiser hjemmefra.\n\n- Piratkostyme\n- Hvitt laken uten stretch\n- Outfit til Ops, jeg kom feil\n- Hippieklær\n- Bevegelige klær som tåler å bli våte\n- Dress/Gallakjole",
  },
  {
    title: "Kontaktinformasjon",
    key: "kontakt",
    content: (
      <div>
        <p>
          Leder av Abakus:
          <br />
          Henriette Bjørheim, 915 86 737, henriette.bjorheim@abakus.no
        </p>
        <p>
          Leder av Arrangementskomiteen til Abakus:
          <br />
          Håkon Hoelsæter, 479 55 802, hakon.hoelsaeter@abakus.no
        </p>
        <p>
          Ansvarlig for kommunikasjon med faddere og fadderbarn:
          <br />
          Kaisa Øyre Larsen, 916 41 758, kaisa.larsen@abakus.no
        </p>
        <p>
          Ansvarlig for kommunikasjon med faddere og fadderbarn:
          <br />
          Ingrid Talseth Singstad, 403 28 322, ingrid.singstad@abakus.no
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
          <a href="https://abakus.no/events">abakus.no/events</a> på PC og blar
          helt nederst på siden, får du alternativene mellom tre mulige
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
