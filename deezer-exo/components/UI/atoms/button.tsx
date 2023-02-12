import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import { useSearch } from "../context/contextalbum";

// function Buttun({ name }) {
// console.log("name", name);
function Buttun() {
  return (
    <div className='Button'>
      {/* <Link href={`/artist/${name}`}> */}
      <Link href={`/artist/`}>
        <Button
          color='secondary'
          variant='outlined'
        >
          Découvrir
        </Button>
      </Link>
    </div>
  );
}

export default Buttun;
