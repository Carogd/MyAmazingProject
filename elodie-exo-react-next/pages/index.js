import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Dropdown from "../components/UI/molecules/dropdown";
import Genders from "../pages/mock/gender.json";
import Races from "../pages/mock/races.json";
import Classes from "../pages/mock/classes.json";
import { createContext } from "react";

export const contextPerso = createContext(null);
export default function Home() {
  // const [stateGender, setGender] = useState(Genders);

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

      {/* <contextPerso.Provider value={(stateGender, setGender)}> */}
      <h1>Choisir ton personnage</h1>
      <div>
        <Dropdown
          // genders={stateGender}
          genders={Genders}
          races={Races}
          classes={Classes}
        />
        {/* {console.log("Test 2", Genders)} */}
      </div>
      {/* </contextPerso.Provider> */}
    </>
  );
}
