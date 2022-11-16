import React from "react";
import { Button } from "@mui/material";
import { usePerso } from "../context/contextperso";

function Buttun() {
  const { statePerso } = usePerso();
  return (
    <div className='Button-submit'>
      <Button
        type='submit'
        color='secondary'
        href='/custom-perso'
        variant='outlined'
      >
        Creer {statePerso.gender}
      </Button>
    </div>
  );
}

export default Buttun;
