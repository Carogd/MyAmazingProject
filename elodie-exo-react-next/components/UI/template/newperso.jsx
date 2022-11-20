import React from "react";
import { usePerso } from "../context/contextperso";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Statistics from "../molecules/statistics";
import Dwarf from "../../../pages/mock/dwarf.json";
import Elfe from "../../../pages/mock/elf.json";
import Human from "../../../pages/mock/human.json";
import styles from "../../../styles/newPersoStat.module.css";

const Newperso = () => {
  const { localStoragePerso } = usePerso();
  return (
    <Card
      className={styles.perso_cart}
      sx={{ maxWidth: 345 }}
    >
      <CardMedia
        component='img'
        height='140'
        image={localStoragePerso.imagePerso}
        alt='image perso'
      />
      <CardContent className={styles.perso_cart_content}>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
        >
          Welcome {localStoragePerso.name} !
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          GENRE : {localStoragePerso.gender}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          RACE : {localStoragePerso.race}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          ROLE : {localStoragePerso.role}
        </Typography>
        <Statistics
          dwarf={Dwarf}
          elfe={Elfe}
          human={Human}
        />
      </CardContent>
      <CardActions>
        <Button
          href='/'
          size='small'
        >
          Modifier mon personnage
        </Button>
      </CardActions>
    </Card>
  );
};

export default Newperso;
