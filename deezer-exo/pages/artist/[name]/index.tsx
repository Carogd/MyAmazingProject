import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSearch } from "../../../components/UI/context/contextalbum";
import Monsuperslider from "../../../components/UI/molecules/slider";
import Styles from "../../../styles/Artistname.module.css";

// Page artist
const PageArtist = () => {
  const router = useRouter();

  // Attention mettre { name } pour router.query, normal car [name]
  const { name } = router.query;
  const queryStringArtiste = `artist?q=${name}`;
  const [dataResultArtists, setdataResultArtist] = useState<any>([]);

  const search = async (queryStringArtiste: string | string[] | undefined) => {
    // let data: any[] = [];
    try {
      const response = await axios.get(
        `https://api.deezer.com/search/${queryStringArtiste}`
      );
      setdataResultArtist(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    search(queryStringArtiste);
  }, [queryStringArtiste]);

  return (
    <>
      <p>Album du même artiste</p>
      <Monsuperslider data={{ dataResultArtists }} />
    </>
  );
};

export default PageArtist;
