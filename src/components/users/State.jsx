import { useState } from 'react';

const State = ({ defaultName = "Tesla" }) => {
    const [carName, setCarname] = useState(defaultName);

    return (
        <>
           <div className='state' style={{textAlign:'center'}}>
             <h2>Hi, I am a car</h2>
            <input type='text' placeholder='Enter the car' 
                onChange={(e) => setCarname(e.target.value)}
            />
            <p>My car name is: {carName}.</p>
           </div>
        </>
    );
}

export default State;
