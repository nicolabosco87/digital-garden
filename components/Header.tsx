"use client";
import { Navbar } from "flowbite-react";
import React from "react";

export const Header = () => {
  return (
    <Navbar className="bg-gradient-to-b from-cyan-600 to-cyan-500 mb-6">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white mb-3 mt-2 text-white">
          Nicola Bosco's Digital Garden
        </span>
      </Navbar.Brand>
    </Navbar>
  );
};
