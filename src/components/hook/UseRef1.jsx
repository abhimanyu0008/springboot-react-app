import { useState,useEffect,useRef } from "react"


function UseRef1(){

    const[value,setValue]=useState(0);
    const count=useRef(10);
   
    useEffect(()=>{
        count.current=count.current+1;
    })
  
    return(
        <>
        <div className="text-center bg-amber-100 p-9">
            <button onClick={()=>setValue(prev=>prev-1)}>-1</button>
            <h1>{value}</h1>
            <button  onClick={()=>setValue(prev=>prev+1)}>+1</button>
            <h1>Render Count:{count.current}</h1>
        </div>
        </>
    )
}
export default UseRef1