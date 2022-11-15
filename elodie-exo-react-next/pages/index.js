import Head from "next/head";
import styles from "../styles/index.module.css";
import Dropdown from "../components/UI/molecules/dropdown";
import Genders from "../pages/mock/gender.json";
import Races from "../pages/mock/races.json";
import Classes from "../pages/mock/classes.json";
// import { style } from "@mui/system";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name='RPG - exo react next'
          content='RPG jeu'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <div className={styles.page_accueil}>
        <h1>Choisir ton personnage</h1>
        <div>
          <Dropdown
            races={Races}
            role={Classes}
            genders={Genders}
          />
        </div>
      </div>
    </>
  );
}
