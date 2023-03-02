import React, { useState } from "react";
import Buttun from "../atoms/button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Styles from "../../../../deezer-exo/styles/Artistname.module.css";

function Monsuperslider(dataArtist: any) {
  const artistData = dataArtist.data.props.dataArtist.data;

  const [currentSlide, setCurrentSlide] = useState(0);
  const elementsPerPage = 4;

  const handlePrev = () => {
    setCurrentSlide(currentSlide - elementsPerPage);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide + elementsPerPage);
  };

  return (
    <div className={Styles.wrapperAristSimilaire}>
      {currentSlide > 0 && <ArrowBackIosIcon onClick={handlePrev} />}
      <div className={Styles.wrapperAristSimilaire}>
        {/* The slice method is used to extract a portion of the data array to
        display based on the current index and the number of elements per page. */}
        {artistData?.slice(currentSlide, currentSlide + elementsPerPage).map(
          (
            dataArtist: {
              id: number;
              picture_medium: string;
              name: number;
              nb_fan: number;
            },
            index: number
          ) => {
            return (
              <div
                className={Styles.containerAristSimilaire}
                key={dataArtist.id}
              >
                <p>{dataArtist.name}</p>
                <img
                  className={Styles.imageSlider}
                  src={dataArtist.picture_medium}
                  alt='eminen album'
                />
                <p>Popularité : {dataArtist.nb_fan} fans</p>

                <Buttun />
              </div>
            );
          }
        )}
      </div>
      {currentSlide + 4 >= artistData?.length ? null : (
        <ArrowForwardIosIcon onClick={handleNext} />
      )}
    </div>
  );
}

export default Monsuperslider;