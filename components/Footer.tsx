"use client";
import { Footer } from "flowbite-react";
import React from "react";

export const AppFooter = () => {
  return (
    <Footer className="p-4">
      <Footer.Copyright by="Nick Woods" href="#" year={new Date().getFullYear()} />
    </Footer>
  );
};
