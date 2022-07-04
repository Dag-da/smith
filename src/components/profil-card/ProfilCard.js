import React from "react";
import styled from "styled-components";
import ProfilCardItem from "./ProfilCardItem";

export default function ProfilCard() {
  return (
    <ProfilWrapper>
      <img src="./img/profilpic.webp" alt="Justin Bieber" />
      <div>
        <ProfilCardItem />
      </div>
    </ProfilWrapper>
  );
}
const ProfilWrapper = styled.div`
  background: #100f3a;
  margin: 1em;
  .container_profil-card {
    padding: 2em;
  }
`;
