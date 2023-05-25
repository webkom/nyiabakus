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
            LOREM IPSUM LETS GOOOO Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris sollicitudin molestie enim, maximus sagittis
            quam tincidunt et. Sed massa libero, dignissim <br /> TODO
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
