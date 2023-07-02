import Icon from "@/components/Icon";
import Link from "next/link";
import { PropsWithChildren } from "react";
import Button from "../Button";
import styles from "./styles.module.css";

export type CardData = {
  icon: string;
  title: string;
  description: string;
  buttons?: {
    href: string;
    text: string;
  }[];
};

const Card: React.FC<CardData> = ({ icon, title, description, buttons }) => {
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
      {buttons &&
        buttons.map(({ href, text }) => (
          <Button key={href + text} href={href} className={styles.button}>
            {text}
          </Button>
        ))}
    </div>
  );
};

export default Card;

export const CardWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.cardWrapper}>{children}</div>;
};
