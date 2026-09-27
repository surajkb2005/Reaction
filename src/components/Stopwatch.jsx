import { func } from "prop-types";
import { useEffect, useRef, useState } from "react";

function Stopwatch() {

    const [isrunning, setIsrunning] = useState(false);
    const [elapsedtime, setElapsedtime] = useState(0);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if (isrunning) {
            intervalRef.current = setInterval(() => {
                setElapsedtime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalRef.current);
        }

    }, [isrunning]);

    function start() {
        setIsrunning(true);
        startTimeRef.current = Date.now() - elapsedtime;
    }
    function stop() {
        setIsrunning(false);
    }
    function reset() {
        setIsrunning(false);
        setElapsedtime(0);
    }

    function formattime() {
        let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
        let min = Math.floor(elapsedtime / (1000 * 60) % 60);
        let sec = Math.floor(elapsedtime / (1000) % 60);
        let milisec = Math.floor((elapsedtime % 1000) / 10);


        hours = String(hours).padStart(2, "0");
        min = String(min).padStart(2, "0");
        sec = String(sec).padStart(2, "0");
        milisec = String(milisec).padStart(2, "0");

        return `${min}:${sec}:${milisec}`;
    }

    return (
        <div className="stopwatch">
            <div className="display-timer">{formattime()}</div>
            <div className="controls-pannel">
                <button className="controls start-timer" onClick={start}>Start</button>
                <button className="controls stop-timer" onClick={stop}>Stop</button>
                <button className="controls reset-timer" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch;