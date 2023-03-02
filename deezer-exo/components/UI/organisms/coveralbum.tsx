import React, { useEffect, useState } from "react";
import Buttun from "../atoms/button";
import styles from "../../../styles/Coveralbum.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSearch } from "../context/contextalbum";

const CoverAlbum = (CoverAlbumData: any) => {
  const { dataResult, state, dispatch } = useSearch();

  // const [nameArtist, setArtistName] = useState(state.search);

  // const addMusic = () => {
  //   // console.log("salut");
  //   state.addMusic(stateHeart, nameArtist);
  // };

  // const [list, setList] = useState(['apple', 'banana', 'orange']);

  // const addItemToList = () => {
  //   setList([...list, 'pear']);
  // }

  return (
    <>
      <div className={styles.favorites}>
        <div className={styles.favoritesWrapper}>
          {state.stateHeart ? (
            <>
              <FavoriteIcon onClick={addMusic} />
              <p>Retirer de ma playlist</p>
            </>
          ) : (
            <>
              <FavoriteBorderIcon onClick={addMusic} />
              <p>Ajouter à ma playlist</p>
            </>
          )}
        </div>
        <img
          className={styles.coveralbum}
          src={CoverAlbumData.CoverAlbumData.DataArtist.album.cover_medium}
          alt='picture Cover'
        />
      </div>
    </>
  );
};

export default CoverAlbum;
