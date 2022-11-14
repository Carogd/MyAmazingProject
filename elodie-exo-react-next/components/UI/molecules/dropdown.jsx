import React, { useEffect } from "react";
import Buttun from "../atoms/buttun";
import { useRef } from "react";
import { useContextPerso } from "../context/contextperso";

const Dropdown = ({ races, role, genders }) => {
  const { genderRef, setGender, stateGender } = useContextPerso();

  useEffect(() => {
    setGender(stateGender);
    localStorage.setItem("gender", stateGender);
  }, [stateGender]);
  return (
    <>
      <form>
        <p>GENRE :</p>
        <select
          name='custom-character'
          id='custom-character'
          ref={genderRef}
          onChange={(e) => {
            stateGender = e.target.value;
            setGender(stateGender);
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
