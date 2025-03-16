import React, { useEffect, useState } from "react";

function UseEffect1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(()=>{
        setCount(count=>count+1)
    },2000)
  },[count,]); 

  return (
    <>
      <div className="text-center bg-amber-200 p-7">
      <h1>I have rendered {count} times</h1>
      </div>
    </>
  );
}

export default UseEffect1;