import React, { useState, useEffect } from 'react';
import './clockstyle.css';


function AnalogClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const secondHandleStyle = {
        transform: `rotate(${seconds * 6}deg)`
    };
    const minutesHandleStyle = {
        transform: `rotate(${minutes * 6 + seconds * 0.1}deg)`
    };
    const hoursHandleStyle = {
        transform: `rotate(${(hours % 12) * 30 + minutes * 0.5}deg)`
    };

    // Generate hour numbers positioned around the clock
    const hourNumbers = [];
    for (let i = 1; i <= 12; i++) {
        const angle = (i * 30) - 90; // Convert hour to angle (subtract 90 to start from top)
        const x = 50 + 40 * Math.cos(angle * (Math.PI / 180)); // X position
        const y = 50 + 40 * Math.sin(angle * (Math.PI / 180)); // Y position
        hourNumbers.push(
            <div 
                key={i} 
                className="hour-number"
                style={{ top: `${y}%`, left: `${x}%`, position: "absolute", transform: "translate(-50%, -50%)" }}
            >
                {i}
            </div>
        );
    }

    return (
        <div className="clock-container">
            <h2>Analog Clock</h2>
            <div className="clock">
                {hourNumbers}
                <div className="hand hour-hand" style={hoursHandleStyle}></div>
                <div className="hand minutes-hand" style={minutesHandleStyle}></div>
                <div className="hand second-hand" style={secondHandleStyle}></div>
            </div>
        </div>
    );
}

export default AnalogClock;
