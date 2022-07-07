import React, { useEffect, useState } from 'react'

export default function HomePageCounter(props) {
    const stop = props.percent
    
    const [time, setTime] = useState(0);
    useEffect(() => {
        let interval;
        if (time === stop) {
            clearInterval(interval);
        } else {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1300 / stop )
        }
        return () => clearInterval(interval);
    }, 
    )
return (
<div id="number" className='text-primary text-5xl font-bold'>{time}%</div>   
)

}

