import styles from "./styles.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";

const InfoSectionFP = () => {
  return (
    <InfoSectionWrapper id="fadderperioden">
      <h2 className={styles.title}>Fadderperioden</h2>
      <p>
        Fadderperioden for datateknologi og kommunikasjonsteknologi er arrangert
        av Abakus. For å bli med må du møte opp på immatrikuleringen, så kommer
        det informasjon. Hvis du ikke får møtt opp, send en epost til
        arrkom@abakus.no for å få en faddergruppe.
      </p>
      <p>TODO</p>
    </InfoSectionWrapper>
  );
};

export default InfoSectionFP;
