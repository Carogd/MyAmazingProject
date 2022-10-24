import React from "react";
import { useContext } from "react";
import contextPerso from "./index";

// const { stateGender } = useContext(contextPerso);

function CustomPerso() {
  return (
    <>
      {/* {console.log({ stateGender })} */}
      <div>Genre : </div>
      <div>Race :</div>
      <div>Classe :</div>
    </>
  );
}

export default CustomPerso;
