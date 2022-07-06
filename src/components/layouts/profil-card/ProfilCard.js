import React from "react";
import SectionTitle from "../../SectionTitle";
import ProfilCardItem from "./ProfilCardItem";
import ProfilCardSN from "./ProfilCardSN";

export default function ProfilCard() {
  return (
      <div className="flex flex-col items-center bg-primary md:max-w-sm mx-auto">
        <img src="./img/profilpic.webp" alt="Justin Bieber" className="object-cover" />
        <div className="py-8">
          <SectionTitle className="text-white" sectionTitleText="General informations" />
          <ProfilCardItem />
          <ProfilCardSN />
        </div>
      </div>
  );
}
