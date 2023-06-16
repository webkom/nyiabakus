import styles from "./styles.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";
import Image from "next/image";

const InfoSectionStudentPub = () => {
  return (
    <InfoSectionWrapper
      id="labamba"
      className={styles.studentPubSection}
      contentClassName={styles.studentPubSectionContent}
    >
      <div className={styles.splitContent}>
        <div className={styles.textWrapper}>
          <Image
            src="/LaBambaLogo.svg"
            alt="LaBamba"
            width={423}
            height={181}
            className={styles.laBambaLogo}
          />
          <p>
            Abakus har vår egen kjeller som heter LaBamba, som også drives av
            komitéen LaBamba. Denne kjelleren ligger på Moholt, og holder åpent
            for diverse fester både i Fadderperioden og utover resten av
            semesteret. Kjelleren har egen skjenkebevilgning, og selger alkohol
            til VELDIG studentvennlige priser 🥳
          </p>
          <p>
            LaBamba kommer til å arrangere vors for faddergrupper under
            Fadderperioden, der noen grupper slås sammen før større
            arrangementer og får være på kjelleren sammen. Dersom vi ikke får
            anledning til å hoste for alle gruppene i løpet av perioden vil
            dette trekkes helt tilfeldig, og alle vil selvfølgelig få beskjed om
            det på forhånd!
          </p>
          <p>
            Vi oppfordrer til å følge @labambakjelleren på instagram for
            oppdateringer om når de holder åpent i løpet av semesteret, og
            gleder oss til å se dere på kjelleren fremover🍻🌴
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            alt="LaBamba-kjelleren"
            src="/uc.jpg"
            width={530}
            height={355}
          />
        </div>
      </div>
    </InfoSectionWrapper>
  );
};

export default InfoSectionStudentPub;
