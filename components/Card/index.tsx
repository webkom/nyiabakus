import styles from "./styles.module.css";

type CardProps = {
  title: String;
  description: String;
};

export default function Card(props: CardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{props.title}</h3>
      <div className={styles.description}>
        {props.description.split("\n").map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}
