import React from "react";
import { useContextPerso } from "../context/contextperso";

const Newperso = () => {
  const { stateGender } = useContextPerso();
  return (
    <>
      {/* {console.log("stateGender", stateGender)} */}
      <div>GENRE : {stateGender}</div>
      <div>Classe :</div>
    </>
  );
};

export default Newperso;
