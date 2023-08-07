import Link from "next/link";
import styles from "./styles.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";

const InfoSectionFP = () => {
  return (
    <InfoSectionWrapper id="fadderperioden" className={styles.fpInfo}>
      <h2 className={styles.title}>Fadderperioden</h2>
      <p>
        NB! Dette er en plan fra linjeforeningen din, Abakus, som ikke
        inkluderer alle detaljer om det obligatoriske opplegget fra
        instituttet/fakultetet. For å være sikker på at du ikke går glipp av
        noe, sjekk ut NTNU sin side som hører til ditt studie;
        <br />
        <a href="https://www.ntnu.no/studier/mtkom">
          5-årig: Kommunikasjonsteknologi og digital sikkerhet (Komtek)
        </a>
        <br />
        <a href="https://www.ntnu.no/studier/mtdt">
          5-årig: Datateknologi (Data)
        </a>
        <br />
        <a href="https://www.ntnu.no/studier/mstcnns">
          2-årig: Digital Infrastructure and Cyber Security (Komtek)
        </a>{" "}
        <br />
        <a href="https://www.ntnu.no/studier/midt">
          2-årig: Datateknologi (Data)
        </a>
      </p>
      <p>
        Fadderperioden for Datateknologi og Kommunikasjonsteknologi er arrangert
        av Abakus.
      </p>
      <p>
        For å bli med må du møte opp på immatrikuleringen, hvor du blir plassert
        i en faddergruppe og får mer informasjon. Hvis du ikke får møtt opp,
        send en epost til{" "}
        <a href="mailto:fadderperioden@abakus.no">fadderperioden@abakus.no</a>{" "}
        (5-årig integrert master) eller{" "}
        <a href="mailto:masterfadderperioden@abakus.no">
          masterfadderperioden@abakus.no
        </a>{" "}
        (2-årig master) for å få en faddergruppe.
      </p>
      <h3 className={styles.subTitle}>5-årig integrert master</h3>
      <p>
        Oppmøte for Datateknologi: Mandag 14. August 12:00 på{" "}
        <Link href={"https://link.mazemap.com/gqncrU4T"}>Kjel 5</Link>
      </p>
      <p>
        Oppmøte for Kommunikasjonsteknologi: Mandag 14. August 10:00 på{" "}
        <Link href={"https://link.mazemap.com/Kpd4nMvI"}>EL2</Link>
      </p>
      <p>
        Facebook-gruppe for nye abakuler på 5-årig integrert master{" "}
        <Link
          href={"https://www.facebook.com/groups/280352384450789/"}
          target={"_blank"}
        >
          finner du her
        </Link>
        .
      </p>
      <h3 className={styles.subTitle}>2-årig master</h3>
      <p>Oppmøte for Datateknologi: TBD</p>
      <p>Oppmøte for Digital Infrastructure and Cyber Security: TBD</p>
      <p>
        Facebook-gruppe for nye abakuler på 2-årig master{" "}
        <Link
          href={"https://www.facebook.com/groups/175376555487442/"}
          target={"_blank"}
        >
          finner du her
        </Link>
        .
      </p>
      <h3 className={styles.subTitle}>Arrangementer</h3>
      <p>
        Du kan se alle arrangementene i Fadderperioden som arrangeres av Abakus
        på <Link href={"/events"}>Fadderperiode-siden</Link>. Resten av
        arrangementene Abakus arrangerer finner du på{" "}
        <Link href={"https://abakus.no/events"}>abakus.no/events</Link>.
      </p>
    </InfoSectionWrapper>
  );
};

export default InfoSectionFP;
