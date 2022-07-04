import React from 'react'
import {Link} from "react-router-dom"
import { AiOutlineGooglePlus, AiOutlineTwitter } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs"
import { TiSocialFacebook } from "react-icons/ti"
import styled from 'styled-components';


export default function ProfilCardSN() {
    const datas = [
        {
            icon: <AiOutlineGooglePlus />,
            id: 1,
            slug: "/",
        },
        {
            icon: <TiSocialFacebook />,
            id: 2,
            slug: "/",
        },
        {
            icon: <BsPinterest />,
            id: 3,
            slug: "/",
        },
        {
            icon: <AiOutlineTwitter />,
            id: 4,
            slug: "/",
        },
    ]
  return (
    <SocialNetwork className='profil-card_SN'>
        {datas.map((data) => (
            <Link to={data.slug} key={data.id}>
                {data.icon}
            </Link>
        ))}
    </SocialNetwork>
  )
}
const SocialNetwork = styled.div`
    display: flex;
    color: #fff;
    a {
        margin: 0 .5rem;
}`