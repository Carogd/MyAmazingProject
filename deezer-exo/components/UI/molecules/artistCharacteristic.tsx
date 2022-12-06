import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "../../../pages";

const ArtistCharacteristic = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log("ArtistCharacteristic data artist", data.data.artist);
  return (
    <div>
      <p>Name : {data.data.artist.name}</p>
    </div>
  );
};

export default ArtistCharacteristic;
