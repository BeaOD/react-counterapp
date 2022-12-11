import React,{useState} from "react";

function FunctionCounter() {
    
    const [count, setCount] = useState(0);
  
    return (
      <>
      <div>
      <p>counter {count} </p>
        <button onClick={() => setCount(count + 1)}>HandleIncrease</button>
        <button onClick={() => setCount(count - 1)}>HandleDecrease</button>
          
        
      </div>
      </>
    );
  }

export default FunctionCounter