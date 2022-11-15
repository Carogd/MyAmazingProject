import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import React from "react";

const ContextPerso = createContext();
const persoInitialState = {
  gender: "",
  race: "",
  role: "",
};

function persoReducer(state, action) {
  switch (action.type) {
    case "update_gender": {
      return {
        ...state,
        [action.key]: action.value,
        localStorage: localStorage.setItem("Gender", action.value),
      };
    }
    case "update_race": {
      return {
        ...state,
        [action.key]: action.value,
        localStorage: localStorage.setItem("Race", action.value),
      };
    }
    case "update_role": {
      return {
        ...state,
        [action.key]: action.value,
        localStorage: localStorage.setItem("Role", action.value),
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function PersoProvider({ children }) {
  const [localStoragePerso, setLocalStorage] = useState({
    gender: "",
    race: "",
    role: "",
  });

  useEffect(() => {
    const localStoragePersoGender = localStorage.getItem("Gender");
    const localStorageRace = localStorage.getItem("Race");
    const localStorageRole = localStorage.getItem("Role");
    setLocalStorage({
      gender: localStoragePersoGender
        ? localStoragePersoGender
        : "Choose a gender from the previous page",
      race: localStorageRace
        ? localStorageRace
        : "Choose a race from the previous page",
      role: localStorageRole
        ? localStorageRole
        : "Choose a role from the previous page",
    });
  }, []);

  const [statePerso, dispatch] = useReducer(persoReducer, persoInitialState);

  return (
    <ContextPerso.Provider value={{ statePerso, dispatch, localStoragePerso }}>
      {children}
    </ContextPerso.Provider>
  );
}

function usePerso() {
  const context = useContext(ContextPerso);
  if (context === undefined) {
    throw new Error("useCount must be used within a PersoProvider");
  }
  return context;
}
export { PersoProvider, usePerso };
