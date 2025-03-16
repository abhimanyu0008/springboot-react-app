import React, { useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);

    return (
        <>
            <div style={{ textAlign: 'center', padding: '30px' }}>
                <button onClick={increment}>Click me</button>
                <p>Count is: {count}</p>
            </div>
        </>
    );
};

export default Count;