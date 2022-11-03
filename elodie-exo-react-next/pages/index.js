import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Dropdown from "../components/UI/molecules/dropdown";
import Genders from "../pages/mock/gender.json";
import Races from "../pages/mock/races.json";
import Classes from "../pages/mock/classes.json";
import { useState, useContext } from "react";
// import ContextPerso from "../components/UI/context/contextperso";
// import contextPersoProvider from "../components/UI/context/contextperso";

export default function Home() {
  // const { stateGender, setGender } = useContext(ContextPerso);

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

      <h1>Choisir ton personnage</h1>
      <div>
        <Dropdown
          // setGender={setGender}
          // stateGender={stateGender}
          races={Races}
          role={Classes}
          genders={Genders}
        />
      </div>
    </>
  );
}
