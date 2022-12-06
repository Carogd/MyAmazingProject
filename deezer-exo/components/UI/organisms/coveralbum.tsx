import React from "react";
import { Data } from "../../../pages";
import Buttun from "../atoms/button";

const CoverAlbum = (data: Data) => {
  return (
    <ul>
      <p>Number {data.id}</p>
      <img
        src={data.picture}
        alt='picture Cover'
      />
      {/* <>{console.log("test CoverAlbum", data)}</> */}
      {/* {data.map((data: any, i: React.Key | null | undefined) => {
        return (
          <li
            value={data.id}
            key={i}
          >
            <p>Number {data.id}</p>
            <img
              src={data.picture}
              alt='picture Cover'
            />
            <Buttun />
          </li>
        );
      })} */}
    </ul>
  );
};

export default CoverAlbum;
