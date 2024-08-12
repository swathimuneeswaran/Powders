import React from "react";

import "react-multi-carousel/lib/styles.css";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import apple_flake from "../../assets/fruitflakes/apple_flake.png";
import apri_flake from "../../assets/fruitflakes/apri_flake.png";
import ban_flake from "../../assets/fruitflakes/ban_flake.png";
import sap_flake from "../../assets/fruitflakes/sap_flake.png";
import pine_flake from "../../assets/fruitflakes/pine_flake.png";
import orange_flake from "../../assets/fruitflakes/orange_flake.png";
import mango_flake from "../../assets/fruitflakes/mango_flake.png";
import pear_flake from "../../assets/fruitflakes/pear_flake.png";
import peach_flake from "../../assets/fruitflakes/peach_flake.png";
import jack_flake from "../../assets/fruitflakes/jack_flake.png";
import goa_flake from "../../assets/fruitflakes/goa_flake.png";
import goose_flake from "../../assets/fruitflakes/goose_flake.png";
import kiwi_flake from "../../assets/fruitflakes/kiwi_flake.png";
import pap_flake from "../../assets/fruitflakes/pap_flake.png";

import apple_pow from "../../assets/fruitpowder/apple_pow.png";
import apri_pow from "../../assets/fruitpowder/apri_pow.png";
import ban_pow from "../../assets/fruitpowder/ban_pow.png";
import sap_pow from "../../assets/fruitpowder/sap_pow.png";
import jack2 from "../../assets/fruitpowder/jack2.png";
import orange_pow from "../../assets/fruitpowder/orange_pow.png";
import mango_pow from "../../assets/fruitpowder/mango_pow.png";
import pear_pow from "../../assets/fruitpowder/pear_pow.png";
import peach_pow from "../../assets/fruitpowder/peach_pow.png";
import jack_pow from "../../assets/fruitpowder/jack_pow.png";
import goa_pow from "../../assets/fruitpowder/goa_pow.png";
import goose_pow from "../../assets/fruitpowder/goose_pow.png";
import kiwi_pow from "../../assets/fruitpowder/kiwi_pow.png";
import pap_pow from "../../assets/fruitpowder/pap_pow.png";


import "../../styles/ProductPage.css";
import { Link } from "react-router-dom";

const pro = [
  {
    id: 1,
    image: apple_flake,
    name: "Apple Flakes",
  },
  {
    id: 2,
    image: apri_flake,
    name: "Apricot Flakes",
  },
  {
    id: 3,
    image: ban_flake,
    name: "Banana Flakes",
  },
  {
    id: 4,
    image: sap_flake,
    name: "Sapota Flakes",
  },
  {
    id: 5,
    image: pine_flake,
    name: "Pineapple Flakes",
  },
  {
    id: 6,
    image: goa_flake,
    name: "Guava Flakes",
  },
  {
    id: 7,
    image: goose_flake,
    name: "Goose Flakes",
  },
  {
    id: 8,
    image: jack_flake,
    name: "Jackfruit Flakes",
  },
  {
    id: 9,
    image: kiwi_flake,
    name: "Kiwi Flakes",
  },
  {
    id: 10,
    image: mango_flake,
    name: "Mango Flakes",
  },
  {
    id: 11,
    image: orange_flake,
    name: "Orange Flakes",
  },
  {
    id: 12,
    image: pap_flake,
    name: "Papaya Flakes",
  },
  {
    id: 13,
    image: peach_flake,
    name: "Peach Flakes",
  },
  {
    id: 14,
    image: pear_flake,
    name: "Pear Flakes",
  },
];
const product_powder = [
  {
    id: 1,
    image: apple_pow,
    name: "Apple Powder",
  },
  {
    id: 2,
    image: apri_pow,
    name: "Apricot Powder",
  },
  {
    id: 3,
    image: ban_pow,
    name: "Banana Powder",
  },
  {
    id: 4,
    image: sap_pow,
    name: "Sapota Powder",
  },
  {
    id: 5,
    image: jack_pow,
    name: "Pineapple Powder",
  },
  {
    id: 6,
    image: goa_pow,
    name: "Guava Powder",
  },
  {
    id: 7,
    image: goose_pow,
    name: "Goose Powder",
  },
  {
    id: 8,
    image: jack2,
    name: "Jackfruit Powder",
  },
  {
    id: 9,
    image: kiwi_pow,
    name: "Kiwi Powder",
  },
  {
    id: 10,
    image: mango_pow,
    name: "Mango Powder",
  },
  {
    id: 11,
    image: orange_pow,
    name: "Orange Powder",
  },
  {
    id: 12,
    image: pap_pow,
    name: "Papaya Powder",
  },
  {
    id: 13,
    image: peach_pow,
    name: "Peach Powder",
  },
  {
    id: 14,
    image: pear_pow,
    name: "Pear Powder",
  },
];

const ProductFruit = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="fruits_pro d-flex justify-content-center align-items-center">
          <div className="category-container d-flex flex-row justify-content-center align-items-center">
           {/* <Link to="/fruits"><button>Back</button></Link> */}
            <select className="form-select me-3">
              <option value="all">All Categories</option>
              <option value="fruits">Fruits</option>
              <option value="vegetables">Vegetables</option>
              <option value="flowers">Flowers</option>
              <option value="herbs">Herbs</option>
            </select>
          </div>
        </div>

        <h1 className="text-center mb-4" style={{ marginTop: "50px" }}>
          Fruit Flakes
        </h1>

        <div className="row" style={{ padding: "30px" }}>
          {pro.map((item, id) => (
            <div key={id} className="col-md-4 col-lg-3 mb-4">
              <div className="card h-100">
              <Link to="/details"><button className="card-button">More Info</button></Link>
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                </div>
              </div>
            
            </div>
          ))}
        </div>

        <h1 className="text-center mb-4" style={{ marginTop: "50px" }}>
          Fruit Powder
        </h1>

        <div className="row" style={{ padding: "30px" }}>
          {product_powder.map((item, id) => (
            <div key={id} className="col-md-4 col-lg-3 mb-4">
              <div className="card h-100">
              <Link to="/details"><button className="card-button">More Info</button></Link>
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductFruit;
