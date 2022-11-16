import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import React from "react";
import Perso01 from "../../../public/asset/perso01.jpg";
import Perso02 from "../../../public/asset/perso02.jpeg";

const ContextPerso = createContext();
const persoInitialState = {
  name: "",
  gender: "male",
  race: "ELF",
  role: "WARRIOR",
  imagePerso: "",
};

function persoReducer(state, action) {
  switch (action.type) {
    case "update_name": {
      return {
        ...state,
        // [action.key]: action.value -> utiliser quand on connait pas la la key
        [action.key]: action.value,
        localStorage: localStorage.setItem("Name", action.value),
      };
    }
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
    name: "",
    gender: "male",
    race: "ELF",
    role: "WARRIOR",
    imagePerso: "",
  });

  useEffect(() => {
    const localStoragePersoGender = localStorage.getItem("Gender");
    const localStorageRace = localStorage.getItem("Race");
    const localStorageRole = localStorage.getItem("Role");
    const localStoragePersoName = localStorage.getItem("Name");
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
      imagePerso:
        localStoragePersoGender === "male" ? Perso01.src : Perso02.src,
      name: localStoragePersoName
        ? localStoragePersoName
        : "Choose a name from the previous page",
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
    throw new Error("usePerso must be used within a PersoProvider");
  }
  return context;
}
export { PersoProvider, usePerso };
