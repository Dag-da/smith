import React from "react";
import {
  PencilIcon,
  MailIcon,
  PhoneIcon,
  DesktopComputerIcon,
} from "@heroicons/react/outline";

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
<div className="mb-5">
      {datas.map((data) => (
        <div className="flex my-2" key={data.id}>
          <div className="w-5 mr-5 text-primary-light">{data.icon}</div>
          <p className="w-200 text-white">
            <span className="text-secondary">{data.grey}</span>
            {data.white}
          </p>
        </div>
      ))}
</div>
  );
}
