import Icon from "@/components/Icon";
import styles from "./styles.module.css";

type CardProps = {
  icon: string;
  title: String;
  description: String;
};

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>
        <Icon name={icon} className={styles.icon}></Icon>
        <span>{title}</span>
      </h3>
      <div className={styles.description}>
        {description.split("\n").map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default Card;
