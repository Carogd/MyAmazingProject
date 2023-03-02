import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import SearchApi from "../../../api/search";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSearch } from "../../../../components/UI/context/contextalbum";
import Monsuperslider from "../../../../components/UI/molecules/slider";
import Styles from "../../../styles/Artistname.module.css";

// Récupérer coté serveur
export type DataArtist = {
  id: number;
  title: string;
  name: string;
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  return {
    props: {
      dataArtist: params?.name
        ? await SearchApi.useApiSearchArtist(params.name)
        : null,
    },
  };
};

// Page artist
const PageArtist = (props: any) => {
  // const router = useRouter();

  // Attention mettre { name } pour router.query, normal car [name]
  // const { name } = router.query;
  // const queryStringArtiste = `artist?q=${name}`;
  // const [dataResultArtists, setdataResultArtist] = useState<any>([]);

  // const search = async (queryStringArtiste: string | string[] | undefined) => {
  //   // let data: any[] = [];
  //   try {
  //     const response = await axios.get(
  //       `https://api.deezer.com/search/${queryStringArtiste}`
  //     );
  //     setdataResultArtist(response?.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   search(queryStringArtiste);
  // }, [queryStringArtiste]);

  return (
    <>
      <p>Album du même artiste</p>
      <Monsuperslider data={{ props }} />
    </>
  );
};

export default PageArtist;
