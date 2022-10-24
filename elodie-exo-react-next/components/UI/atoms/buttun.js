import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";

function Buttun() {
  return (
    <div className='Button-submit'>
      <Button
        type='submit'
        color='secondary'
        href='/custom-perso'
      >
        Creer
      </Button>
    </div>
  );
}

export default Buttun;
