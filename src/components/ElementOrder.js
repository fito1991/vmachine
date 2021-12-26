import React, { useState, useEffect } from 'react'
import useCountdown from "@bradgarropy/use-countdown"

const ElementOrder = (detail) => {

    const {name, time} = detail.detail;

    // state
    const [currentTime, setcurrentTime] = useState(time);

    // console.log(countdown);
    const countdown = useCountdown({
        seconds: currentTime,
        format: "mm:ss",
        onCompleted: () => setcurrentTime(0), //() => console.log("onCompleted")
    });
    

    return (
        <div className="col s12 m12 l12">
            {
                currentTime === 0 ? '' : 
                <p className="vend" data-timer=''>
                {name} , Remaining: <span>{countdown.formatted}</span>
                </p>
            }
        </div>
    )
}

export default ElementOrder
