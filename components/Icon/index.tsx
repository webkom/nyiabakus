import React from "react";
import styles from "./styles.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";

// prettier-ignore
const Icon: React.FC<{ name: string }> = (props) => {
  {/* @ts-ignore*/}
  return <ion-icon {...props}></ion-icon>;
};

export default Icon;
