import React from "react";
import Buttun from "../atoms/buttun";
import { useRef } from "react";
import { useContextPerso } from "../context/contextperso";

const Dropdown = ({ races, role, genders }) => {
  const { stateGender, setGender, finalCustomPerso } = useContextPerso();
  const genderRef = useRef();
  // const handleSubmitForm = (e) => {
  //   e.preventDefault();
  //   const genderValue = genderRef.current.value;
  //   return genderValue;
  // };
  const choseGender = (target) => {
    setGender(target);
  };

  return (
    <>
      <form
        // onSubmit={handleSubmitForm}
        onClick={finalCustomPerso}
      >
        <p>GENRE :</p>
        <select
          name='custom-character'
          id='custom-character'
          ref={genderRef}
          onChange={(e) => {
            const selectedGender = e.target.value;
            choseGender(selectedGender);
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
        <Buttun valuesCustomPerso={stateGender} />
      </form>
    </>
  );
};

export default Dropdown;
