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
        noe, sjekk <a href="https://www.ntnu.no/studier/mtkom">denne siden</a>{" "}
        hvis du skal gå Kommunikasjonsteknologi og digital sikkerhet (Komtek)
        eller <a href="https://www.ntnu.no/studier/mtdt">denne</a> hvis du skal
        gå Datateknologi (Data).
      </p>
      <p>
        Fadderperioden for datateknologi og kommunikasjonsteknologi er arrangert
        av Abakus.
      </p>
      <p>
        For å bli med må du møte opp på immatrikuleringen, hvor du blir plassert
        i en faddergruppe og får mer informasjon. Hvis du ikke får møtt opp,
        send en epost til <a href="mailto:arrkom@abakus.no">arrkom@abakus.no</a>{" "}
        for å få en faddergruppe.
      </p>
      <p>&nbsp; </p>
      <p>Oppmøte for Datateknologi: TBD</p>
      <p>Oppmøte for Kommunikasjonsteknologi: TBD</p>
      <p>&nbsp; </p>
      <p>
        Facebook-gruppe for nye abakuler{" "}
        <Link
          href={"https://www.facebook.com/groups/280352384450789/"}
          target={"_blank"}
        >
          finner du her
        </Link>
        .
      </p>
      <p>&nbsp; </p>
      <p>
        Du kan se alle arrangementene i fadderperioden som arrangeres av Abakus
        på <Link href={"/events"}>Fadderperiode-siden</Link>. Resten av
        arrangementene Abakus arrangerer finner du på{" "}
        <Link href={"https://abakus.no/events"}>abakus.no/events</Link>.
      </p>
    </InfoSectionWrapper>
  );
};

export default InfoSectionFP;
