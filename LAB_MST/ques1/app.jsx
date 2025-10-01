import React, {useState} from 'react';
const Counter =()=>{
  const[count,setCount]=useState(0);
  const increment=()=>{
    if (count<10) {
      setCount(count+1);
    }
  };
  const decrement=()=>{
    if(count>0) {
      setCount(count-1);
    }
  };
  const reset=()=>{
    setCount(0);
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment} disabled={count === 10}>
        Increment
      </button>
      <button onClick={decrement} disabled={count === 0}>
        Decrement
      </button>
      <button onClick={reset}>
        Reset
      </button>
      {count === 10 && <p>Max limit reached</p>}
    </div>
  );
};
export default Counter;
