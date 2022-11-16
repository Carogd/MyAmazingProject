import React from "react";
import LinearProgressWithLabel from "@mui/material/LinearProgress";

const statistics = ({ dwarf }) => {
  return (
    <>
      {dwarf.map((dwarf, i) => {
        return (
          <div
            value={dwarf.maxValue}
            key={i}
          >
            {dwarf.maxValue}
          </div>
        );
      })}
      {/* <LinearProgressWithLabel
        variant='determinate'
        value={20}
      /> */}
    </>
  );
};

export default statistics;
