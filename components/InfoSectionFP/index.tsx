import Link from "@/components/Link";
import styles from "./styles.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";
import {
  FACEBOOK_GROUP_FIRSTYEARS,
  FACEBOOK_GROUP_FOURTHYEARS,
  MIDT,
  MSTCNNS,
  MTDT,
  MTKOM,
} from "@/utils/constants";

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
        <Link href="https://www.ntnu.no/studier/mtkom">
          5-årig: {MTKOM.name} ({MTKOM.shorthand})
        </Link>
        <br />
        <Link href="https://www.ntnu.no/studier/mtdt">
          5-årig: {MTDT.name} ({MTDT.shorthand})
        </Link>
        <br />
        <Link href="https://www.ntnu.no/studier/mstcnns">
          2-årig: {MSTCNNS.name} ({MSTCNNS.shorthand})
        </Link>{" "}
        <br />
        <Link href="https://www.ntnu.no/studier/midt">
          2-årig: {MIDT.name} ({MIDT.shorthand})
        </Link>
      </p>
      <p>
        Fadderperioden for {MTDT.name} og {MTKOM.name} er arrangert av Abakus.
      </p>
      <p>
        For å bli med må du møte opp på immatrikuleringen, hvor du blir plassert
        i en faddergruppe og får mer informasjon. Hvis du ikke får møtt opp,
        send en epost til{" "}
        <Link href="mailto:fadderperioden@abakus.no">
          fadderperioden@abakus.no
        </Link>{" "}
        (5-årig integrert master) eller{" "}
        <Link href="mailto:masterfadderperioden@abakus.no">
          masterfadderperioden@abakus.no
        </Link>{" "}
        (2-årig master) for å få en faddergruppe.
      </p>
      <h3 className={styles.subTitle}>5-årig integrert master</h3>
      <p>Oppmøte for {MTDT.name}: TBD</p>
      <p>Oppmøte for {MTKOM.name}: TBD</p>
      <p>
        Facebook-gruppe for nye abakuler på 5-årig integrert master:{" "}
        {FACEBOOK_GROUP_FIRSTYEARS === "" ? (
          "TBD"
        ) : (
          <Link href={FACEBOOK_GROUP_FIRSTYEARS}>facebook.com/groups/...</Link>
        )}
      </p>
      <h3 className={styles.subTitle}>2-årig master</h3>
      <p>Oppmøte for {MIDT.name}: 12.15 i H1, Hovedbygget</p>
      <p>Oppmøte for {MSTCNNS.name}: 11.30 i G108, Gamle Elektro</p>
      <p>
        Facebook-gruppe for nye abakuler på 2-årig master:{" "}
        {FACEBOOK_GROUP_FOURTHYEARS === "" ? (
          "TBD"
        ) : (
          <Link href={FACEBOOK_GROUP_FOURTHYEARS}>facebook.com/groups/...</Link>
        )}
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
