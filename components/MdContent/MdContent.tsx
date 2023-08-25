import React from "react";
import "./MdContent.css";

type MdContentProps = {
  html: string;
};

export const MdContent = ({ html }: MdContentProps) => {
  return (
    <div
      className="md-content"
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};
