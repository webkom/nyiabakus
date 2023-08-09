import { PropsWithChildren, useRef, useState } from "react";
import styles from "./styles.module.css";
import Icon from "../Icon";

type Props = {
  title: string;
  minHeight?: string;
  initiallyOpen?: boolean;
};

const CollapsibleItem: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
  minHeight,
  initiallyOpen = false,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  return (
    <>
      {title && (
        <div
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          <Icon className={styles.icon} name="chevron-forward-outline" />
          {title}
        </div>
      )}
      <div
        onClick={() => {
          if (minHeight) setIsOpen((isOpen) => !isOpen);
        }}
        className={styles.collapsibleItemParent}
        style={
          isOpen && contentRef.current
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: minHeight || "0px" }
        }
      >
        <div
          className={styles.collapsibleItem}
          style={{ minHeight: minHeight }}
          ref={contentRef}
        >
          {children}
        </div>

        <div
          style={
            !isOpen
              ? { boxShadow: "inset 0px -6px 10px var(--day-description)" }
              : { boxShadow: "none" }
          }
          className={styles.collapsibleItemGradient}
        />
      </div>
    </>
  );
};

export default CollapsibleItem;
