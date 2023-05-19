import Card from "@/components/Card";
import styles from "./styles.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";

const InfoSectionPreparation = () => {
  return (
    <InfoSectionWrapper
      id={"før-trondheim"}
      className={styles.preparationSection}
    >
      <h2 className={styles.title}>Før du kommer til Trondheim</h2>
      <p>
        Her har vi litt tips for hva det er lurt å tenke på før du reiser
        hjemmefra
      </p>
      <div className={styles.cardContainer}>
        <Card
          title={"Pakkeliste"}
          description={
            "Meld deg på arrangementer og følg med på hva som skjer i Abakus!"
          }
        />
        <Card
          title={"Kontaktinformasjon"}
          description={
            "Her har kan du finne kontaktinformasjonen til diverse personer i Abakus dersom du lurer på noe"
          }
        />
      </div>
      <p>
        <br />
        TODO: Legge til TODO-liste
      </p>
    </InfoSectionWrapper>
  );
};

export default InfoSectionPreparation;
