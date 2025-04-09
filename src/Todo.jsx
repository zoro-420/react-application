import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store";
const Todo= () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", 
    flexDirection: "column", 
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "lightblue",
    fontSize: "20px",
    fontWeight: "bold",
    border: "2px solid black",
    
     }}>  
      <div>Count:{count}</div>
      
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Todo;