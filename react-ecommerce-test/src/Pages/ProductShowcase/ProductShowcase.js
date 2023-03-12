import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ProductShowcase.css";
import inventory from "../../data/inventory";

function ProductShowcase() {
  const { id } = useParams();
  const [nubMug, setMugState] = useState(1);

  const updateMugs = (e) => {
    setMugState(e.target.value);
  };

  const addingInfo = useRef();
  let timerInfo;
  let display = true;

  const dispatch = useDispatch();

  const addToCart = (e) => {
    e.preventDefault();

    const itemAdded = {
      ...inventory[productClicked],
      quantity: nubMug,
    };

    dispatch({
      type: "ADDITEM",
      payload: itemAdded,
    });
    addingInfo.current.innerText = "Ajouter au panier";

    if (display) {
      display = false;
      timerInfo = setTimeout(() => {
        addingInfo.current.innerText = "";
        display = true;
      }, 500);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerInfo);
    };
  }, []);

  // fonction callback lancé pour chaque obj du tableau
  // Ce code utilise la méthode findIndex sur un tableau d'objets inventory. findIndex renvoie l'index du premier élément dans le tableau qui satisfait une condition donnée
  const productClicked = inventory.findIndex(
    (obj) => obj.title.replace(/\s+/g, "").trim() === id
  );

  return (
    <div className='showcase'>
      <div className='container-img-showcase'>
        <img
          className='img-showcase'
          src={
            process.env.PUBLIC_URL +
            `/images/${inventory[productClicked].img}.png`
          }
          alt='img showcase'
        />
      </div>
      <div className='product-infos'>
        <h2>{inventory[productClicked].title}</h2>
        <p>Prix : {inventory[productClicked].price}€</p>
        <form onSubmit={addToCart}>
          <label htmlFor='quantity'>Quantité</label>
          <input
            type='number'
            id='quantity'
            value={nubMug}
            onChange={updateMugs}
          />
          <button>Ajouter au panier</button>
          <span ref={addingInfo} className='adding-info'></span>
        </form>
      </div>
    </div>
  );
}

export default ProductShowcase;
