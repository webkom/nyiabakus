import React from "react";

type IconProps = {
  name: string;
  className?: string;
};

// prettier-ignore
const Icon: React.FC<IconProps> = ({name, className}) => {
  {/* @ts-ignore */}
  return <span className={className}><ion-icon name={name} suppressHydrationWarning={true}></ion-icon></span>;
};

export default Icon;
