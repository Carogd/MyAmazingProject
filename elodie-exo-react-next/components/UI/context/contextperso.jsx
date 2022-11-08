// import * as React from "react";

// const CountContext = React.createContext();

// function countReducer(state, action) {
//   switch (action.type) {
//     case "increment": {
//       return { count: state.count + 1 };
//     }
//     case "decrement": {
//       return { count: state.count - 1 };
//     }
//     default: {
//       throw new Error(`Unhandled action type: ${action.type}`);
//     }
//   }
// }

// function CountProvider({ children }) {
//   const [state, dispatch] = React.useReducer(countReducer, { count: 0 });
//   // NOTE: you might need to memoize this value
//   // Learn more in http://kcd.im/optimize-context
//   const value = { state, dispatch };
//   return (
//     <CountContext.Provider value={{ test: 1 }}>
//       {children}
//     </CountContext.Provider>
//   );
// }

// function useCount() {
//   const context = React.useContext(CountContext);
//   if (context === undefined) {
//     throw new Error("useCount must be used within a CountProvider");
//   }
//   return context;
// }

// export { CountProvider, useCount };

import { createContext, useContext, useState } from "react";
import { useRef } from "react";
import React, { useEffect } from "react";

const ContextPerso = createContext("");

export function ContextPersoProvider({ children }) {
  const [stateGender, setGender] = useState("male");
  const genderRef = useRef();
  const genderRefFinal = stateGender;

  const choseGender = (target) => {
    setGender(target);
  };

  return (
    <ContextPerso.Provider
      value={{
        stateGender,
        setGender,
        choseGender,
        genderRef,
        genderRefFinal,
      }}
    >
      {children}
    </ContextPerso.Provider>
  );
}
// HOOKS
export function useContextPerso() {
  return useContext(ContextPerso);
}

// export default ContextPerso;
