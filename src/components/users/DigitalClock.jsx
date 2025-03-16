import React, { useState, useEffect } from 'react';

export default function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div>
            <h1>Digital Clock</h1>
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    );
}