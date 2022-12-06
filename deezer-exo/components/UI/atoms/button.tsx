import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";

function Buttun() {
  return (
    <div className='Button-submit'>
      <Link href='/'>
        <Button
          color='secondary'
          variant='outlined'
        >
          JE SUIS LE CTA
        </Button>
      </Link>
    </div>
  );
}

export default Buttun;
