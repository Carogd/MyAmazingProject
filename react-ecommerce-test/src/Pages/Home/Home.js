import React from "react";
import "./Home.css";
import imgHomeShop from "./shopimg.jpg";

function Home() {
  return (
    <div className='global-container'>
      <h1 className='home-title'>
        Bienvenue au <span>Shop</span>
      </h1>
      <p>
        Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quam, velit laboriosam, quo id perferendis reprehenderit soluta quos
        totam necessitatibus labore, tenetur amet molestiae laborum debitis
        maiores suscipit at culpa. Aliquam?
      </p>
      <img src={imgHomeShop} alt='image Shop' />
    </div>
  );
}

export default Home;
