import React from "react";
import Buttun from "../atoms/buttun";
import { usePerso } from "../context/contextperso";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";

const Dropdown = ({ races, role, genders }) => {
  const { statePerso, dispatch } = usePerso();

  return (
    <>
      <TextField
        label='Nom du personnage'
        value={statePerso.name}
        onChange={(e) => {
          dispatch({
            type: "update_name",
            value: e.target.value,
            key: "name",
          });
        }}
      />
      <FormControl
        variant='standard'
        sx={{ m: 1, minWidth: 120 }}
      >
        <InputLabel>GENRE</InputLabel>
        <Select
          name='custom-character'
          value={statePerso.gender}
          onChange={(e) => {
            dispatch({
              type: "update_gender",
              value: e.target.value,
              key: "gender",
            });
          }}
        >
          {/* {console.log("test Dropdown", statePerso.gender)} */}
          {genders.map((gender, i) => {
            return (
              <MenuItem
                value={gender.gender}
                key={i}
              >
                {gender.gender}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl
        variant='standard'
        sx={{ m: 1, minWidth: 120 }}
      >
        <InputLabel>RACE</InputLabel>
        <Select
          name='custom-character'
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
              <MenuItem
                value={race.type}
                key={i}
              >
                {race.type}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl
        variant='standard'
        sx={{ m: 1, minWidth: 120 }}
      >
        <InputLabel>CLASSE</InputLabel>
        <Select
          name='custom-character'
          value={statePerso.role}
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
              <MenuItem
                value={role.availableRole}
                key={i}
              >
                {role.availableRole}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Buttun />
    </>
  );
};

export default Dropdown;
