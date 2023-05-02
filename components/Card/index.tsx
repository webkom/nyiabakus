import styles from "./styles.module.css";

interface CardProps {
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ title, text }) => {
  return (
    <div className={styles.card}>
      <p>{title}</p>
      <p>{text}</p>
    </div>
  );
};

export default Card;
