import React from "react";
import { FCWithChildrenProps } from "../types/utility.types";

type AnchorProps = FCWithChildrenProps & React.HTMLProps<HTMLAnchorElement>;

export const Anchor = (props: AnchorProps) => {
  const { className, ...otherProps } = props;

  return <a {...otherProps} className={`mb-4 text-cyan-600 hover:text-cyan-400 ${className}`} />;
};
