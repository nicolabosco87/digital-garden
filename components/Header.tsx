"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export const Header = () => {
  return (
    <Navbar position="sticky" maxWidth="full">
      <NavbarBrand>Nicola Bosco&apos;s Digital Garden</NavbarBrand>
    </Navbar>
  );
};
