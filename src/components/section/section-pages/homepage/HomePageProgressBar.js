import React from 'react'
import styled from 'styled-components'

export default function HomePageProgressBar({id, style, percent, softSkill}) {
  return (
    <ProgressBar key={id}>
        <div className='soft-skill'>
            <div className='outer'>
                <div className='inner'>
                    <div id="number" className='text-primary text-5xl font-bold'>{percent}</div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="15rem" height="15rem">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stopColor="#e91e63" />
                        <stop offset="100%" stopColor="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="110" cy="110" r="105" strokeLinecap="round" className={style} />
            </svg>
            <h3 className='text-xl font-bold text-center text-primary uppercase mt-7'>{softSkill}</h3>
        </div>
    </ProgressBar>
  )
}
export const ProgressBar = styled.div`
display: flex;
align-items: center;
justify-content: center;
.soft-skill{
    width: 15rem;
    height: 15rem;
    position: relative;
}
.outer{
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
    background-color: #e5e6e8;
    padding: 2rem;
}
.inner{
    height: 11rem;
    width: 11rem;
    border-radius: 50%;
    background-color: #f5f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
}
circle {
    fill: none;
    stroke: #8583e1;
    stroke-width: 3px;
    stroke-dasharray: 660;
    stroke-dashoffset: 660;
}
svg{
    position: absolute;
    top: 0.6rem;
    left: 0.6rem;
}
@keyframes bou{
    100%{
        stroke-dashoffset: 165;
    }
}
`