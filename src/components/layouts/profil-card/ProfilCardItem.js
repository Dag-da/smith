import React from "react";
import {
  PencilIcon,
  MailIcon,
  PhoneIcon,
  DesktopComputerIcon,
} from "@heroicons/react/outline";

export default function ProfilCardItem() {
  const itemSize = "w-4 h-4";
  const datas = [
    {
      icon: <PencilIcon className={itemSize} />,
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
      icon: <MailIcon className={itemSize} />,
      grey: "contactme@templatename.com",
      white: "",
      id: 3,
    },
    {
      icon: <PhoneIcon className={itemSize} />,
      grey: "+76 6524 567862 763",
      white: "",
      id: 4,
    },
    {
      icon: <DesktopComputerIcon className={itemSize} />,
      grey: "www.mytemplatename.com",
      white: "",
      id: 5,
    },
  ];
  return (
<div className="mb-5">
      {datas.map((data) => (
        <div className="flex items-center text-xs leading-6" key={data.id}>
          <div className="text-primary-light mr-3 w-5">{data.icon}</div>
          <p className="w-200 text-white">
            <span className="text-secondary">{data.grey}</span>
            {data.white}
          </p>
        </div>
      ))}
</div>
  );
}
