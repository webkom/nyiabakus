import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

type Props = Omit<React.ComponentProps<typeof Image>, "alt"> & {
  textClassName?: string;
  alt: string;
};

const FullscreenImage: React.FC<Props> = (props) => {
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullscreen(false);
    };
    addEventListener("keydown", listener);
    return () => {
      removeEventListener("keydown", listener);
    };
  }, [fullscreen]);

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
