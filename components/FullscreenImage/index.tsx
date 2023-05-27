import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

type Props = Omit<React.ComponentProps<typeof Image>, "alt"> & {
  textClassName?: string;
  alt: string;
};

const FullscreenImage: React.FC<Props> = (props) => {
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <>
      <Image
        {...props}
        onClick={() => {
          setFullscreen((v) => !v);
        }}
        alt={props.alt}
        style={{ ...props.style, cursor: "zoom-in" }}
      />
      <p
        className={props.textClassName}
        onClick={() => {
          setFullscreen((v) => !v);
        }}
      >
        Trykk på bildet for å vise fullskjerm
      </p>
      <div
        className={fullscreen ? styles.fullscreenImage : styles.hidden}
        onClick={() => {
          setFullscreen(false);
        }}
        style={{
          background: `rgba(0,0,0,.5) url('${props.src}') no-repeat center`,
          backgroundSize: "contain",
        }}
      />
    </>
  );
};

export default FullscreenImage;
