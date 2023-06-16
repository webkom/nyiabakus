import styles from "./styles.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";
import Card from "@/components/Card";

const InfoSectionStudy = () => {
  return (
    <InfoSectionWrapper id="studiestart">
      <h2 className={styles.title}>Studiestart</h2>
      <div className={styles.cardContainer}>
        {cardData.map(({ title, icon, description }) => (
          <Card
            key={title}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </InfoSectionWrapper>
  );
};

export default InfoSectionStudy;

const cardData = [
  {
    title: "Instabart",
    icon: "link",
    description:
      "Du finner en rask samling av lenker til ting du har bruk for på instabart.no",
  },
];
