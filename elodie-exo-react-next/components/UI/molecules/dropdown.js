import React from "react";
import Buttun from "../atoms/buttun";
import { useRef } from "react";
import { useState } from "react";

const Dropdown = ({ genders, races, classes }) => {
  const [stateGender, setGender] = useState("");
  const genderRef = useRef();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const genderValue = genderRef.current.value;
    return genderValue;
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <p>GENRE :</p>
        <select
          name='custom-character'
          id='custom-character'
          ref={genderRef}
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
          {classes.map((classe, i) => {
            return (
              <option
                value={classe.availableRole}
                key={i}
              >
                {classe.availableRole}
              </option>
            );
          })}
        </select>
        <Buttun />
      </form>
      {/* {stateGender} */}
    </>
  );
};

export default Dropdown;
