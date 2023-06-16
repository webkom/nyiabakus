import Icon from "@/components/Icon";
import Link from "next/link";
import { PropsWithChildren } from "react";
import Button from "../Button";
import styles from "./styles.module.css";

export type CardData = {
  icon: string;
  title: string;
  description: string;
  buttonHref?: string;
  buttonText?: string;
};

const Card: React.FC<CardData> = ({
  icon,
  title,
  description,
  buttonHref,
  buttonText,
}) => {
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
      {buttonHref && buttonText && (
        <Button href={buttonHref} className={styles.button}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default Card;

export const CardWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.cardWrapper}>{children}</div>;
};
