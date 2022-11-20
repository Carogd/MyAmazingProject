import React from "react";
import LinearProgressWithLabel from "@mui/material/LinearProgress";
import { usePerso } from "../context/contextperso";
import styles from "../../../styles/newPersoStat.module.css";

// MIN = Minimum expected value
// MAX = Maximium expected value
// Function to normalise the values (MIN / MAX could be integrated)
const normalise = (value) => ((value - 0) * 100) / (150 - 0);
const statistics = ({ dwarf, human, elfe }) => {
  const { localStoragePerso } = usePerso();
  const statPerso = (props) => (
    <div className={styles.stats_perso_wrapper}>
      {props.map((props, id) => {
        return (
          <div
            key={id}
            className={styles.stats_perso}
          >
            <div value={props.label}>{props.label}</div>
            <div>
              <LinearProgressWithLabel
                variant='buffer'
                value={normalise(props.maxValue)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      {localStoragePerso.race === "DWARF" ? <>{statPerso(dwarf)}</> : null}
      {localStoragePerso.race === "HUMAN" ? <>{statPerso(human)}</> : null}
      {localStoragePerso.race === "ELF" ? <>{statPerso(elfe)}</> : null}
    </>
  );
};

export default statistics;
