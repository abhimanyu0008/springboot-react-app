import { useState } from "react";


function UseMemo1(){
    const[number,setNumber]=useState(0);
    const[counter,setCounter]=useState(0);

    function cubeNum(num){
        return Math.pow(num,3);
    }
    const result=cubeNum(number)

    return(
        <>
        <div className="text-center bg-amber-200 p-9">
           <input type="nunmber" value={number}onChange={(e)=>{setNumber(e.target.value)}}></input>
           <h1>Cube of number is {result}</h1> 


        </div>
        </>
    )
}
export default UseMemo1;