import Link from "@/components/Link";
import styles from "./styles.module.css";

export type CardData = {
  href: string;
  children: string;
  className?: string;
};

const Button: React.FC<CardData> = ({ href, children, className }) => {
  return (
    <Link href={href} className={`${styles.button} ${className}`}>
      {children}
    </Link>
  );
};

export default Button;
