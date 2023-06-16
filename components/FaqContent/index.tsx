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
      "En linjeforening er en forening av og for studentene som går ett eller flere studier.",
  },
  {
    title: "Hva består Abakus av?",
    key: "abakus",
    content:
      "Abakus består av omtrent 1000 studenter, fra Komtek og Data.\nInnad i disse har vi et Hovedstyre, 10 komitéer, 1 revy, 5 undergrupper og masse interessegrupper.",
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
    content:
      "Leder Abakus: Henriette Bjørheim, 915 86 737, henriette.bjorheim@abakus.no\nLeder Arrangementskomiteen til Abakus: Håkon Hoelsæter, 479 55 802, hakon.hoelsaeter@abakus.no\nAnsvarlig for kommunikasjon med faddere og fadderbarn: Kaisa Øyre Larsen, 916 41 758, kaisa.larsen@abakus.no \nAnsvarlig for kommunikasjon med faddere og fadderbarn: Ingrid Talseth Singstad, 403 28 322, ingrid.singstad@abakus.no",
  },
];
