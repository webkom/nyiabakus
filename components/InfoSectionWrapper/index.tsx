import { PropsWithChildren } from "react";
import styles from "./styles.module.css";

const InfoSectionWrapper: React.FC<
  PropsWithChildren & React.HTMLAttributes<HTMLDivElement>
> = ({ children, className, ...props }) => {
  return (
    <div className={`${styles.wrapper} ${className}`} {...props}>
      <div className={`${styles.contentWrapper} ${className}`}>{children}</div>
    </div>
  );
};

export default InfoSectionWrapper;
