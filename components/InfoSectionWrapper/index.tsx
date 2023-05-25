import { PropsWithChildren } from "react";
import styles from "./styles.module.css";

const InfoSectionWrapper: React.FC<
  PropsWithChildren<
    React.HTMLAttributes<HTMLDivElement> & {
      contentClassName?: string;
    }
  >
> = ({ children, className, contentClassName, ...props }) => {
  return (
    <div className={`${styles.wrapper} ${className}`} {...props}>
      <div
        className={`${styles.contentWrapper} ${
          contentClassName ? contentClassName : className
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default InfoSectionWrapper;
