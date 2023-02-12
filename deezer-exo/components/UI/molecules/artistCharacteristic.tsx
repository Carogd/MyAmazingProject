import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
// import { getServerSideProps } from "../../../pages";

// export type ArtistCharacteristicData = {
//   ArtistCharacteristicData: any;
// };

const ArtistCharacteristic = (ArtistCharacteristicData: any) => {
  // console.log("ArtistCharacteristic data artist", DataArtist);
  const artistName =
    ArtistCharacteristicData.ArtistCharacteristicData.DataArtist.artist.name;
  const artistTitre =
    ArtistCharacteristicData.ArtistCharacteristicData.DataArtist.title;

  return (
    <div>
      <p>
        <b>{artistName}</b>
      </p>
      <p>{artistTitre}</p>
    </div>
  );
};

export default ArtistCharacteristic;
