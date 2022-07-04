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
      grey: "contactme@templatename.com",
      white: "",
      id: 3,
    },
    {
      icon: <PhoneIcon />,
      grey: "+76 6524 567862 763",
      white: "",
      id: 4,
    },
    {
      icon: <DesktopComputerIcon />,
      grey: "www.mytemplatename.com",
      white: "",
      id: 5,
    },
  ];
  return (
<>
      {datas.map((data) => (
        <div className="flex my-2" key={data.id}>
          <div className="w-5 mr-2 text-primary-dark">{data.icon}</div>
          <p className="w-200 text-accent">
            <span className="text-accent-dark">{data.grey}</span>
            {data.white}
          </p>
        </div>
      ))}
</>
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
