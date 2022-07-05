import React from "react";
import ProfilCardItem from "./ProfilCardItem";
import ProfilCardSN from "./ProfilCardSN";

export default function ProfilCard() {
  return (
    <div className="container">
      <div className="flex flex-col items-center bg-primary">
        <img src="./img/profilpic.webp" alt="Justin Bieber" />
        <div className="pt-8 pb-8">
          <ProfilCardItem />
          <ProfilCardSN />
        </div>
      </div>
    </div>
  );
}
