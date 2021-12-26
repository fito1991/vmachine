import React, { useState, useEffect } from 'react'
// import useCountDown from "react-countdown-hook";
import useCountdown from "@bradgarropy/use-countdown"

const ElementOrder = (detail) => {
    // console.log(detail.detail)
    // extract detail order
    const {name, time} = detail.detail;

    // countdown
    // const [timeLeft, actions] = useCountDown(time * 1000, 100);

    // state
    const [currentTime, setcurrentTime] = useState(time);

    // console.log(countdown);
    const countdown = useCountdown({
        seconds: currentTime,
        format: "mm:ss",
        onCompleted: () => setcurrentTime(0), //() => console.log("onCompleted")
    });
    
    // useEffect(() => {
    //     setcurrentTime(countdown.formatted)
    // }, []);

    return (
        <div className="col s12 m12 l12">
            {/* <p className="vend" data-timer={(timeLeft / 1000).toFixed(0)}>
                {name} , Remaining: <span>{(timeLeft / 1000).toFixed(0)}</span> seconds
            </p> */}
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
