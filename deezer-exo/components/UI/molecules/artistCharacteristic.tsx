import React from "react";
// import artist from ".json";
import { InferGetServerSidePropsType } from "next";
import { getServerSidePropsArtist } from "../../../pages";

// type DataArtist = {};

// export const getServerSidePropsArtist: GetServerSideProps<{
//   data: DataArtist;
// }> = async (context) => {
//   const res = await fetch("https://api.deezer.com/artist/27");
//   const data: DataArtist = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };

const ArtistCharacteristic = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSidePropsArtist>) => {
  // Si jamais c est undefined on set un tableau vide
  // const { result = [] } = data;

  return <>data : {console.log("ArtistCharacteristic data", data)}</>;
};

export default ArtistCharacteristic;
