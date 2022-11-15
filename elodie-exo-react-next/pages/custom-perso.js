import React from "react";
import Newperso from "../components/UI/template/newperso";
import { usePerso } from "../components/UI/context/contextperso";

function CustomPerso() {
  const { statePerso, dispatch } = usePerso();
  return (
    <>
      <Newperso valuesCustomPerso={statePerso} />
    </>
  );
}

export default CustomPerso;
