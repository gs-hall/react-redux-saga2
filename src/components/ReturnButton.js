import React from "react";
import LinkButton from "./LinkButton";

export default function ReturnButton({ returnLink = "/" }) {
  return (
    <LinkButton text="К списку сервисов" link={ returnLink } />
  );
};