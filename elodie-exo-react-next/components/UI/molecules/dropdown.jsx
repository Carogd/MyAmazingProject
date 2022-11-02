import React from "react";
import Buttun from "../atoms/buttun";
import { useRef } from "react";
import Newperso from "../template/newperso";
import { useState, useContext } from "react";
// import { useCount } from "../context/contextperso";
import ContextPerso from "../context/contextperso";

const Dropdown = ({ races, role, genders }) => {
  // const count = useCount();
  // console.log("count", count);;
  const { test1 } = useContext(ContextPerso);
  console.log("test1", test1);
  const genderRef = useRef();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const genderValue = genderRef.current.value;
    return genderValue;
  };
  const [stateGender, setGender] = useState("male");
  // const choseGender = () => {
  //   setGender(stateGender);
  // };
  const valuesCustomPerso = {
    gender: stateGender,
  };

  return (
    <>
      <form
        onSubmit={handleSubmitForm}
        onClick={() => {
          console.log(valuesCustomPerso);
          return valuesCustomPerso;
          // const finalState = valuesCustomPerso;
          // console.log("valuesCustomPerso 2", finalState);
          // return finalState;
        }}
      >
        <p>GENRE :</p>
        {/* <p>{test}</p> */}
        <select
          name='custom-character'
          id='custom-character'
          ref={genderRef}
          // onChange={(e) => {
          //   const selectedGender = e.target.value;
          //   setGender(selectedGender);
          // }}
          onChange={(e) => {
            const selectedGender = e.target.value;
            setGender(selectedGender);
          }}
        >
          {genders.map((gender, i) => {
            return (
              <option
                value={gender.gender}
                key={i}
              >
                {gender.gender}
              </option>
            );
          })}
        </select>
        <p>RACE : </p>
        <select
          name='custom-character'
          id='custom-character'
        >
          {races.map((race, i) => {
            return (
              <option
                value={race.type}
                key={i}
              >
                {race.type}
              </option>
            );
          })}
        </select>
        <p>LA CLASSE : </p>
        <select
          name='custom-character'
          id='custom-character'
        >
          {role.map((role, i) => {
            return (
              <option
                value={role.availableRole}
                key={i}
              >
                {role.availableRole}
              </option>
            );
          })}
        </select>
        <Buttun valuesCustomPerso={valuesCustomPerso.gender} />
        {/* <Newperso valuesCustomPerso={valuesCustomPerso.gender} /> */}
      </form>
    </>
  );
};

export default Dropdown;
