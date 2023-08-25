import React from "react";
import { FCWithChildrenProps } from "../types/utility.types";

type TitleProps = FCWithChildrenProps;

export const Title = ({ children }: TitleProps) => {
  return <h1 className="text-xl mb-4 font-light ">{children}</h1>;
};
