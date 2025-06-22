import React, { createContext, useContext, useState } from "react";

export const CounterContext = createContext();

const Counter = ({ children }) => {
  const [no, setNo] = useState(0);

  const Increment = () => {
    setNo(no + 1);
  };
   const Decrement = () => {
    setNo(no - 1);
  };
  return (
    <div>
      <CounterContext.Provider value={{ no, Increment , Decrement}}>
        {children}
      </CounterContext.Provider>
    </div>
  );
};

export default Counter;
