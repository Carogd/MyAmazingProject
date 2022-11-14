import React, { useEffect } from "react";
import { useState } from "react";
import { useContextPerso } from "../context/contextperso";

const Newperso = () => {
  const [localStoragePerso, setLocalStorage] = useState("");
  const { setGender, stateGender } = useContextPerso();
  const perso = {
    gender: stateGender,
  };

  useEffect(() => {
    const localStoragePerso = localStorage.getItem("gender").toString();
    setLocalStorage(localStoragePerso);
    setGender(localStoragePerso);
  }, [localStoragePerso]);

  return (
    <>
      <div id='genderType_Perso'>GENRE : {perso.gender}</div>
      <div>Classe :</div>
    </>
  );
};

export default Newperso;
