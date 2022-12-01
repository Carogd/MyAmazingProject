import { GetServerSideProps, InferGetServerSidePropsType } from "next";

type Data = {};

export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (
  context
) => {
  const res = await fetch("https://api.deezer.com/user/2529/playlists");
  const data: Data = await res.json();

  console.log("data >>>", data);
  return {
    props: {
      data,
    },
  };
};
