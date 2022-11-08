import { useContextPerso } from "../context/contextperso";
import React, { useEffect } from "react";
import { useState } from "react";

const Newperso = () => {
  const [localStoragePerso, setLocalStorage] = useState("");

  useEffect(() => {
    const localStoragePerso = localStorage.getItem("gender").toString();
    setLocalStorage(localStoragePerso);
  }, [localStoragePerso]);

  return (
    <>
      <div id='genderType_Perso'>GENRE : {localStoragePerso}</div>
      <div>Classe :</div>
    </>
  );
};

export default Newperso;
