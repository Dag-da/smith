import React from "react";
import {
  PencilIcon,
  MailIcon,
  PhoneIcon,
  DesktopComputerIcon,
} from "@heroicons/react/outline";
import styled from "styled-components";

export default function ProfilCardItem() {
  const datas = [
    {
      icon: <PencilIcon />,
      grey: "Name: ",
      white: "Justin Bieber",
      id: 1,
    },
    {
      icon: "",
      grey: "Location: ",
      white: "London UK",
      id: 2,
    },
    {
      icon: <MailIcon />,
      grey: "Location: ",
      white: "London UK",
      id: 3,
    },
    {
      icon: <PhoneIcon />,
      grey: "contactme@template.com ",
      white: "",
      id: 4,
    },
    {
      icon: <DesktopComputerIcon />,
      grey: "Location: ",
      white: "",
      id: 5,
    },
  ];
  return (
    <div className="container_profil-card">
      {datas.map((data) => (
        <ProfilItem key={data.id}>
          <div className="icon">{data.icon}</div>
          <p>
            <span>{data.grey}</span>
            {data.white}
          </p>
        </ProfilItem>
      ))}
    </div>
  );
}
const ProfilItem = styled.div`
  display: flex;
  align-items: center;
  font-size: .8rem;
  padding-top: .5em;
  padding-bottom: .5em;
  color: #fff;
  svg {
    height: 1em;
    color: #8583e1;
  }
  span {
    color: #7a798c;
  }
  .icon {
    width: 1rem;
    margin-right: 1em;
  }
`;
