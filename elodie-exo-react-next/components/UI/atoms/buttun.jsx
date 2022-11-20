import React from "react";
import { Button } from "@mui/material";
import { usePerso } from "../context/contextperso";
import Link from "next/link";

function Buttun() {
  const { statePerso } = usePerso();
  return (
    <div className='Button-submit'>
      <Link href='/custom-perso'>
        <Button
          type='submit'
          color='secondary'
          variant='outlined'
        >
          Creer {statePerso.gender}
        </Button>
      </Link>
    </div>
  );
}

export default Buttun;
