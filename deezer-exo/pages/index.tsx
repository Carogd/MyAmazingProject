import Head from "next/head";
import React from "react";
// import styles from "../styles/Home.module.css";
import CoverAlbum from "../components/UI/organisms/coveralbum";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import SearchAppBar from "../components/UI/molecules/searchappbar";
import ArtistCharacteristic from "../components/UI/molecules/artistcharacteristic";

export type Data = {
  data?: any;
  id?: number;
  cover_medium?: string;
  picture?: string | undefined;
};
// type DataArtist = {};

// Album data
export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (
  context
) => {
  const res = await fetch("https://api.deezer.com/album/302127");
  const data: Data = await res.json();

  return {
    props: {
      data,
    },
  };
};

// Artist data
// export const getServerSidePropsArtist: GetServerSideProps<{
//   dataArtist: DataArtist;
// }> = async (context) => {
//   const res = await fetch("https://api.deezer.com/artist/27");
//   const dataArtist: DataArtist = await res.json();

//   return {
//     props: {
//       dataArtist,
//     },
//   };
// };

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      {/* <div className={styles.container}></div> */}
      <Head>
        <title>Create Next App - Deezer Exo</title>
        <meta
          name='Mon app Deezer'
          content='Generated by create next app'
        />
      </Head>
      {/* <main className={styles.main}> */}
      <main>
        <SearchAppBar />
        <h1>Retrouve ta musique préférée</h1>
        <CoverAlbum
          id={data.id}
          // picture={`https://api.deezer.com/artist/${id}/image}`}
          picture={data.cover_medium}
        />
        <ArtistCharacteristic data={{ data }} />
        <>{console.log("data - STEP 01", data)}</>
      </main>
    </div>
  );
};

export default Home;
