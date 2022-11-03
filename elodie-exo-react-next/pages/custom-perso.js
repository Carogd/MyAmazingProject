import React from "react";
import Newperso from "../components/UI/template/newperso";
import { useContextPerso } from "../components/UI/context/contextperso";

function CustomPerso() {
  const { stateGender } = useContextPerso();
  return (
    <>
      <Newperso valuesCustomPerso={stateGender} />
    </>
  );
}

export default CustomPerso;
