import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleAlt,
  faCarrot,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import side1 from "../../assets/images/side1.webp";
import side2 from "../../assets/images/side2.webp";
import side3 from "../../assets/images/side3.jpg";
import side4 from "../../assets/images/side4.jpg";
import side5 from "../../assets/images/side5.jpg";
import fruit_flakes1 from "../../assets/images/fruit_flakes1.jpg";
import fruit_pow from "../../assets/fruitflakes/fruit_pow.jpeg";
import fruit_pow1 from "../../assets/fruitflakes/fruit_pow1.jpeg"
import leaf_flakes1 from "../../assets/fruitflakes/leaf_flakes1.jpeg";
import leaf_flakes2 from "../../assets/images/leaf_flakes2.jpg";
import leaf_powder1 from "../../assets/images/leaf_powder1.jpg";
import leaf_powder2 from "../../assets/images/leaf_powder2.jpg";
import leaf_powder3 from "../../assets/images/leaf_powder3.jpg";
import fruit_flakes from "../../assets/fruitflakes/fruit_flakes.jpeg"
import fruit_flake2 from "../../assets/fruitflakes/fruit_flake2.jpeg"
import veg_flakes1 from "../../assets/images/veg_flakes1.jpg";
import veg_flakes2 from "../../assets/images/veg_flakes2.jpg";
import veg_powder1 from "../../assets/images/veg_powder1.jpg";
import veg_powder2 from "../../assets/images/veg_powder2.jpg";
import rose_powder1 from "../../assets/images/rose_powder1.jpg";
import rose_powder2 from "../../assets/images/rose_powder2.jpg";
import rose_flakes from "../../assets/images/rose_flakes.png";
import rose_flakes1 from "../../assets/images/rose_flakes1.jpg";
import { Link } from "react-router-dom";

const ProductContent = () => {
  const [openSections, setOpenSections] = useState({
    fruits: false,
    vegetables: false,
    leafyGreens: false,
    flowers: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      {/* Parallax Section */}
      <div className="parallax-section"></div>

      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-3 sticky-sidebar">
            <h3>Varieties</h3>

            {/* Fruits Section */}
            <div className="section">
              <div className="section-header">
              <Link to="/fruits"><h5>Fruits</h5></Link>
                <h5
                  onClick={() => toggleSection("fruits")}
                  className="toggle-icon"
                >
                  {openSections.fruits ? <RemoveIcon /> : <AddIcon />}
                </h5>
              </div>
              {openSections.fruits && (
                <ul>
                  <li>Fruits Flakes</li>
                  <li>Fruits Powders</li>
                </ul>
              )}
            </div>

            {/* Vegetables Section */}
            <div className="section">
              <div className="section-header">
                <h5>Vegetables</h5>
                <h5
                  onClick={() => toggleSection("vegetables")}
                  className="toggle-icon"
                >
                  {openSections.vegetables ? <RemoveIcon /> : <AddIcon />}
                </h5>
              </div>
              {openSections.vegetables && (
                <ul>
                  <li>Vegetables Flakes</li>
                  <li>Vegetables Powders</li>
                </ul>
              )}
            </div>

            {/* Leafy Greens Section */}
            <div className="section">
              <div className="section-header">
                <h5>Leafy Greens</h5>
                <h5
                  onClick={() => toggleSection("leafyGreens")}
                  className="toggle-icon"
                >
                  {openSections.leafyGreens ? <RemoveIcon /> : <AddIcon />}
                </h5>
              </div>
              {openSections.leafyGreens && (
                <ul>
                  <li>Leaf Flakes</li>
                  <li>Leaf Powders</li>
                </ul>
              )}
            </div>

            {/* Flowers Section */}
            <div className="section">
              <div className="section-header">
                <h5>Flowers</h5>
                <h5
                  onClick={() => toggleSection("flowers")}
                  className="toggle-icon"
                >
                  {openSections.flowers ? <RemoveIcon /> : <AddIcon />}
                </h5>
              </div>
              {openSections.flowers && (
                <ul>
                  <li>Rose Flakes</li>
                  <li>Rose Powders</li>
                </ul>
              )}
            </div>

            <Carousel
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div>
                <img
                  src={side1}
                  width="90%"
                  alt="Sidebar"
                  className="sec_img"
                />
              </div>
              <div>
                <img
                  src={side2}
                  width="90%"
                  alt="Sidebar"
                  className="sec_img"
                />
              </div>
              <div>
                <img
                  src={side3}
                  width="90%"
                  alt="Sidebar"
                  className="sec_img"
                />
              </div>
              <div>
                <img
                  src={side4}
                  width="90%"
                  alt="Sidebar"
                  className="sec_img"
                />
              </div>
              <div>
                <img
                  src={side5}
                  width="90%"
                  alt="Sidebar"
                  className="sec_img"
                />
              </div>
            </Carousel>
          </div>

          <div className="col-9 scrollable-content">
            <h1>Products</h1>

            {/* Fruits Category */}
            <div className="product_category">
              <div className="sticky-box">
                <span>
                  <FontAwesomeIcon icon={faAppleAlt} />
                </span>
                <h3> Fruits</h3>
              </div>

              <div className="d-flex justify-content-start align-items-center gap-5">
                <div className="img-container">
                  <img
                    src="https://i.pinimg.com/564x/af/18/2d/af182d948331a049ac748fe670d15841.jpg"
                    className="main-img"
                    alt="Fruit Image 1"
                  />
                  <div className="overlay">
                    <img
                      src={fruit_pow1}
                      className="hover-img"
                      alt="Fruit Hover Image 1"
                    />
                     <img
                    src={fruit_pow}
                    className="hover-img"
                    alt="Fruit Image 1"
                  />
                    {/* <div className="overlay-text">Dehydrated <br></br>Fruits Powder</div> */}
                  </div>
                </div>

                <div className="img-container">
                  <img
                    src="https://i.pinimg.com/564x/af/18/2d/af182d948331a049ac748fe670d15841.jpg"
                    className="main-img"
                    alt="Fruit Image 2"
                  />
                  <div className="overlay">
                    <img
                      src={fruit_flake2}
                      className="hover-img"
                      alt="Fruit Hover Image 2"
                    />
                    <img
                      src={fruit_flakes}
                      className="hover-img"
                      alt="Fruit Hover Image 2"
                    />
                    {/* <div className="overlay-text">Dehydrated <br></br>Fruits Flakes</div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Vegetables Category */}
            <div className="product_category">
              <div className="sticky-box">
                <span>
                  <FontAwesomeIcon icon={faCarrot} />
                </span>
                <h3>Vegetables</h3>
              </div>

              <div className="d-flex justify-content-start align-items-center gap-5">
                <div className="img-container">
                  <img
                    src="https://i.pinimg.com/236x/bb/0b/c5/bb0bc5c210fc6cc315206811ce5fe131.jpg"
                    className="main-img"
                    alt="Vegetable Image 1"
                  />
                  <div className="overlay">
                    <img
                      src={veg_powder1}
                      className="hover-img"
                      alt="Vegetable Hover Image 1"
                    />
                    <img
                      src={veg_powder2}
                      className="hover-img"
                      alt="Vegetable Hover Image 1"
                    />
                    {/* <div className="overlay-text">Dehydrated <br></br>Vegetable Powder</div> */}
                  </div>
                </div>

                <div className="img-container">
                  <img
                    src="https://i.pinimg.com/736x/f4/0d/09/f40d09218f332b34e52173a53be7334a.jpg"
                    className="main-img"
                    alt="Vegetable Image 2"
                  />
                  <div className="overlay">
                    <img
                      src={veg_flakes1}
                      className="hover-img"
                      alt="Vegetable Hover Image 1"
                    />
                    <img
                      src={veg_flakes2}
                      className="hover-img"
                      alt="Vegetable Hover Image 1"
                    />
                    {/* <div className="overlay-text">Dehydrated <br></br>Vegetable Flakes</div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Leafy Greens Category */}
            <div className="product_category">
              <div className="sticky-box">
                <span>
                  <FontAwesomeIcon icon={faLeaf} />
                </span>
                <h3> Leaves</h3>
              </div>

              <div className="d-flex justify-content-start align-items-center gap-5">
                <div className="img-container">
                  <img
                    src="https://i.pinimg.com/236x/85/a2/dc/85a2dc4bea5450385370376d6827d412.jpg"
                    className="main-img"
                    alt="Leafy Green Image 1"
                  />
                  <div className="overlay">
                    <img
                      src={leaf_powder1}
                      className="hover-img"
                      alt="Leafy Green Hover Image 1"
                    />
                    <img
                      src={leaf_powder2}
                      className="hover-img"
                      alt="Leafy Green Hover Image 1"
                    />
                    {/* <div className="overlay-text">Dehydrated <br></br>Leaves Powder</div> */}
                  </div>
                </div>

                <div className="img-container">
                  <img
                    src="https://i.pinimg.com/236x/85/a2/dc/85a2dc4bea5450385370376d6827d412.jpg"
                    className="main-img"
                    alt="Leafy Green Image 2"
                  />
                  <div className="overlay">
                    <img
                      src={leaf_flakes1}
                      className="hover-img"
                      alt="Leafy Green Hover Image 2"
                    />
                    <img
                      src={leaf_flakes2}
                      className="hover-img"
                      alt="Leafy Green Hover Image 2"
                    />
                    {/* <div className="overlay-text">Dehydrated <br></br>Leaves Flakes</div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Flowers Category */}
            <div className="product_category">
              <div className="sticky-box">
                <span>
                  <FilterVintageIcon style={{ fontSize: "36px" }} />
                </span>
                <h3> Flowers</h3>
              </div>

              <div className="d-flex justify-content-start align-items-center gap-5">
                <div className="img-container">
                  <img
                    src="https://w0.peakpx.com/wallpaper/892/306/HD-wallpaper-basket-of-flowers-basket-of-roses-red-roses-white-flowers.jpg"
                    className="main-img"
                    alt="Flower Image 1"
                  />
                  <div className="overlay">
                    <img
                      src={rose_powder1}
                      className="hover-img"
                      alt="Flower Hover Image 1"
                    />
                    <img
                      src={rose_powder2}
                      className="hover-img"
                      alt="Flower Hover Image 1"
                    />
                    {/* <div className="overlay-text">Dehydrated <br></br>Flowers Powder</div> */}
                  </div>
                </div>

                <div className="img-container">
                  <img
                    src="https://s1.1zoom.me/big0/346/377069-sepik.jpg"
                    className="main-img"
                    alt="Flower Image 2"
                  />
                  <div className="overlay">
                    <img
                      src={rose_flakes}
                      className="hover-img"
                      alt="Flower Hover Image 2"
                    />

                    <img
                      src={rose_flakes1}
                      className="hover-img"
                      alt="Flower Hover Image 2"
                    />
                    {/* <div className="overlay-text">Dehydrated <br></br>Flowers Flakes</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductContent;
