import React from "react";
import styled from "styled-components";
import ProfilCardItem from "./ProfilCardItem";
import ProfilCardSN from "./ProfilCardSN";

export default function ProfilCard() {
  return (
    <ProfilWrapper>
      <img src="./img/profilpic.webp" alt="Justin Bieber" />
      <div className="container_profil-card">
      <ProfilCardItem />
      <ProfilCardSN /></div>
    </ProfilWrapper>
  );
}
const ProfilWrapper = styled.div`
  background: #100f3a;
  margin: 1em;
  .container_profil-card {
    padding: 2.5em;
  }
  .profil-card_SN {
    width: fit-content;
    margin-right: auto;
    margin-left: auto;
  }
`;
