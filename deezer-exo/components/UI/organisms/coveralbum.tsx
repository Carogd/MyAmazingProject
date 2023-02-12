import React, { useState } from "react";
import Buttun from "../atoms/button";
import styles from "../../../styles/Coveralbum.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CoverAlbum = (CoverAlbumData: any) => {
  const [stateHeart, setHeart] = useState(false);

  const modifyHeart = () => {
    setHeart(!stateHeart);
  };

  return (
    <>
      <div className={styles.favorites}>
        <div className={styles.favoritesWrapper}>
          {stateHeart ? (
            <>
              <FavoriteIcon onClick={modifyHeart} />
              <p>Retirer de ma playlist</p>
            </>
          ) : (
            <>
              <FavoriteBorderIcon onClick={modifyHeart} />
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
