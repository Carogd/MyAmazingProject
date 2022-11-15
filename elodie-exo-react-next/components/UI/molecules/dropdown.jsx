import React from "react";
import Buttun from "../atoms/buttun";
import { usePerso } from "../context/contextperso";

const Dropdown = ({ races, role, genders }) => {
  const { statePerso, dispatch } = usePerso();

  return (
    <>
      <form>
        <p>GENRE :</p>
        <select
          name='custom-character'
          id='custom-character'
          value={statePerso.gender}
          onChange={(e) => {
            dispatch({
              type: "update_gender",
              value: e.target.value,
              key: "gender",
            });
          }}
        >
          {console.log("test Dropdown", statePerso.gender)}
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
          value={statePerso.race}
          onChange={(e) => {
            dispatch({
              type: "update_race",
              value: e.target.value,
              key: "race",
            });
          }}
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
          value={statePerso.race}
          onChange={(e) => {
            dispatch({
              type: "update_role",
              value: e.target.value,
              key: "role",
            });
          }}
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
        <Buttun />
      </form>
    </>
  );
};

export default Dropdown;
