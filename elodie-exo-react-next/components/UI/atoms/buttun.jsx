import React from "react";
import { Button } from "@mui/material";

function Buttun({ valuesCustomPerso }) {
  return (
    <div className='Button-submit'>
      <Button
        type='submit'
        color='secondary'
        href='/custom-perso'
      >
        Creer {valuesCustomPerso}
      </Button>
    </div>
  );
}

export default Buttun;
