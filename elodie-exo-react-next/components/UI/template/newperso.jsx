import React, { useEffect } from "react";
import { usePerso } from "../context/contextperso";

const Newperso = () => {
  const { localStoragePerso } = usePerso();
  return (
    <>
      <div id='genderType_Perso'>GENRE : {localStoragePerso.gender}</div>
      <div id='raceType_Perso'>RACE : {localStoragePerso.race}</div>
      <div id='roleType_Perso'>ROLE : {localStoragePerso.role}</div>
    </>
  );
};

export default Newperso;
