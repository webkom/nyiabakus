import styles from "./styles.module.css";
import Image from "next/image";

interface CommitteeCardProps {
  title: string;
  logo?: string;
  description?: string;
  contributions?: string;
  children?: React.ReactNode;
}

const AboutCard = ({
  title,
  logo,
  description,
  contributions,
  children,
}: CommitteeCardProps) => {
  return (
    <div className={styles.card}>
      <header className={styles.header}>
        {logo && (
          <Image
            width={50}
            height={50}
            src={logo}
            alt={title}
            className={styles.icon}
          />
        )}
        <h3>{title}</h3>
      </header>
      {description && <p>{description}</p>}
      {contributions && (
        <>
          <h4 className={styles.subTitle}>Bidrag i fadderperioden:</h4>
          <p>{contributions}</p>
        </>
      )}
      {children}
    </div>
  );
};

export default AboutCard;
