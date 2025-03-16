import React, { useState } from "react";

const Demo = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("red");
    const[car, setCar]=useState({
        brand:"ferrari",
        model:"roma",
        year:"2020",
        color:"red"
    });
    const changeName=()=>{
        setCar((car)=>{
            return{...car,color:"blue"}
        })
    }

    const increment = () => setCount(count + 1);
    const changeColor = () => setColor("blue");

    return (
        <>
        <div className="text-center bg-amber-800 p-4">
            <h3>This is my {car.brand}</h3>
            <button className="rounded-lg border-2 border-blue-500 px-4 py-2 bg-blue-100 hover:bg-blue-200 transition-colors"
                    onClick={changeName}> Click me </button>

        </div>

            {/* <div className="text-center bg-amber-50 p-6">
                <h1 className="text-2xl font-bold mb-4">This is demo provider</h1>
                <button className="rounded-lg border-2 border-blue-500 px-4 py-2 bg-blue-100 hover:bg-blue-200 transition-colors"
                    onClick={increment}> Click me </button>
                <p className="mt-4 text-lg">Count is {count}</p>
            </div> */}

            <div className="text-center bg-amber-300 p-6 mt-8">
                <h1 className="text-2xl font-bold mb-4">
                    This favorite color is{" "}
                    <span style={{ color: color }}>{color}</span>
                </h1>
                <button
                    className="rounded-lg border-2 border-blue-500 px-4 py-2 bg-blue-100 hover:bg-blue-200 transition-colors"
                    onClick={changeColor}>Change to Blue</button>
            </div>
        </>
    );
};

export default Demo;