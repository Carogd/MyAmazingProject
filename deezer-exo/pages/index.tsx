import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";

import { GetServerSideProps, InferGetServerSidePropsType } from "next";
// import { getServerSideProps } from "../../api/deezeapi";

type Data = {};

export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (
  context
) => {
  const res = await fetch("https://api.deezer.com/user/2529/playlists");
  const data: Data = await res.json();

  return {
    props: {
      data,
    },
  };
};

// function Page({
//   data,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   // will resolve data to type Data
//   return <>test {console.log("data test >>> ", data)}</>;
// }

// export default Page;

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App - Deezer Exo</title>
        <meta
          name='Mon app Deezer'
          content='Generated by create next app'
        />
      </Head>

      <main className={styles.main}>
        <div>Tester</div>
        {/* OK DATA  */}
        <>{console.log("data - STEP 01", data)}</>
      </main>
    </div>
  );
}
