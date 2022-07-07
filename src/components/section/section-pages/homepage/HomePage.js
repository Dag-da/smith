import React from 'react'
import styled from 'styled-components'
import PageTitle from "../../../PageTitle"
import SectionTitle from '../../../SectionTitle'
import HomePageProgressBar from './HomePageProgressBar'


const datas = [
  {
    id: 1,
    style: "circle_1",
    percent: 66,
    softSkill: "intuition",
  },
  {
    id: 2,
    style: "circle_2",
    percent: 30,
    softSkill: "creativity",
  },
  {
    id: 3,
    style: "circle_3",
    percent: 70,
    softSkill: "pure luck",
  },
  {
    id: 4,
    style: "circle_4",
    percent: 28,
    softSkill: "awesomeness",
  },
]

function speed(a) {
 return 660 - (a * 6.6)
}

let speedCircle1 = speed(datas[0].percent)
let speedCircle2 = speed(datas[1].percent)
let speedCircle3 = speed(datas[2].percent)
let speedCircle4 = speed(datas[3].percent)

export default function Homepage() {
  const contents = {
    title: "Justin Bieber",
    suptitle: "Développeur full stack",
    sectionTitleStyle: "",
    sectionTitleText: "Description"
  }
  
  return (
    <>
    <PageTitle titleText={contents.title} supTitleText={contents.suptitle} />
    <SectionTitle sectionTitleStyle={contents.sectionTitleStyle} sectionTitleText={contents.sectionTitleText} />
    <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum et sit cum modi magni perspiciatis quod commodi, vero beatae ad, adipisci asperiores magnam ducimus soluta dicta nesciunt? Nobis autem at perferendis accusamus iure consequuntur. Doloribus, dolorum? Nam eum similique deserunt, minima excepturi ad! Id non doloremque molestias. Fuga, quam asperiores?</p>
    <div className='md:flex items-center justify-center md:space-x-20 my-100 space-y-36 md:space-y-0'>
      
      {datas.map((data) => (
      <WrapperProgressBar key={data.id}>
      <HomePageProgressBar style={data.style} percent={data.percent} softSkill={data.softSkill} />
      </WrapperProgressBar>
      ))}   
    </div>
    </>
  )
}
const WrapperProgressBar = styled.div`

display: flex;
align-items: center;
justify-content: center;

 .circle_1 {
  animation: anim_1 2s linear forwards;
 }

@keyframes anim_1{
       100%{
           stroke-dashoffset: ${speedCircle1};
       } 
  }

 .circle_2 {
  animation: anim_2 2s linear forwards;
 }

@keyframes anim_2{
       100%{
           stroke-dashoffset: ${speedCircle2};
       } 
  }
  
 .circle_3 {
  animation: anim_3 2s linear forwards;
 }

@keyframes anim_3{
       100%{
           stroke-dashoffset: ${speedCircle3};
       } 
      }
  
 .circle_4 {
  animation: anim_4 2s linear forwards;
 }

@keyframes anim_4{
       100%{
           stroke-dashoffset: ${speedCircle4};
       } 
      }
`