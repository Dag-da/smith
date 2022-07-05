import React from 'react'
import {Link} from "react-router-dom"
import { AiOutlineGooglePlus, AiOutlineTwitter } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs"
import { TiSocialFacebook } from "react-icons/ti"


export default function ProfilCardSN() {
    const size = "h-5 w-5"
    const datas = [
        {
            icon: <AiOutlineGooglePlus className={size} />,
            id: 1,
            slug: "/",
        },
        {
            icon: <TiSocialFacebook className={size} />,
            id: 2,
            slug: "/",
        },
        {
            icon: <BsPinterest className={size} />,
            id: 3,
            slug: "/",
        },
        {
            icon: <AiOutlineTwitter className={size} />,
            id: 4,
            slug: "/",
        },
    ]
  return (
    <div className='flex justify-center space-x-3 text-secondary'>
        {datas.map((data) => (
            <Link to={data.slug} key={data.id}>
                {data.icon}
            </Link>
        ))}
    </div>
  )
}
