import React, { useState, useEffect } from 'react';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import side1 from "../../assets/images/side1.webp";
import side2 from "../../assets/images/side2.webp";
import side3 from "../../assets/images/side3.jpg";
import side4 from "../../assets/images/side4.jpg";
import side5 from "../../assets/images/side5.jpg";
import ProductFruit from "./ProductFruit";

const ProductContent = ({ searchQuery }) => {
  const [openSections, setOpenSections] = useState({
    fruits: false,
    vegetables: false,
    leafyGreens: false,
    flowers: false,
  });

  const [selectedCategory, setSelectedCategory] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div className="container-fluid variety_side">
        <div className="row">
          <div className="col-3 sticky-sidebar">
            <h3>Varieties</h3>
            <div className="section">
              <div className="section-header">
                <h5 onClick={() => handleCategoryClick("fruit flakes")}>Fruits</h5>
              </div>
              <ul>
                <li style={{ cursor: "pointer" }} onClick={() => handleCategoryClick("fruit flakes")}>
                  Fruits Flakes
                </li>
                <li style={{ cursor: "pointer" }} onClick={() => handleCategoryClick("fruit powder")}>
                  Fruits Powder
                </li>
              </ul>
            </div>

            <div className="section">
              <div className="section-header">
                <h5 onClick={() => handleCategoryClick("vegetable flakes")}>Vegetables</h5>
              </div>
              <ul>
                <li style={{ cursor: "pointer" }} onClick={() => handleCategoryClick("vegetable flakes")}>
                  Vegetable Flakes
                </li>
                <li style={{ cursor: "pointer" }} onClick={() => handleCategoryClick("vegetable powder")}>
                  Vegetable Powder
                </li>
              </ul>
            </div>

            <div className="section">
              <div className="section-header">
                <h5 onClick={() => handleCategoryClick("leaf flakes")}>Leafy greens</h5>
              </div>
              <ul>
                <li style={{ cursor: "pointer" }} onClick={() => handleCategoryClick("leaf flakes")}>
                  Leaf flakes
                </li>
                <li style={{ cursor: "pointer" }} onClick={() => handleCategoryClick("leaf Powder")}>
                  Leaf powder
                </li>
              </ul>
            </div>

            <div className="section">
              <div className="section-header">
                <h5 onClick={() => handleCategoryClick("rose")}>Flowers</h5>
              </div>
              <ul>
                <li style={{ cursor: "pointer" }} onClick={() => handleCategoryClick("rose")}>
                  Rose Flakes
                </li>
                <li style={{ cursor: "pointer" }} onClick={() => handleCategoryClick("rose")}>
                  Rose Powders
                </li>
              </ul>
            </div>

            {windowWidth > 900 && (
              <Carousel
                responsive={responsive}
                ssr={true}
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
              
                  <div className='variety_side_img'>
                    <img src={side1} width="90%" alt="Sidebar" className="sec_img" />
                  </div>
                  <div className='variety_side_img'>
                    <img src={side2} width="90%" alt="Sidebar" className="sec_img" />
                  </div>
                  <div className='variety_side_img'>
                    <img src={side3} width="90%" alt="Sidebar" className="sec_img" />
                  </div>
                  <div className='variety_side_img'>
                    <img src={side4} width="90%" alt="Sidebar" className="sec_img" />
                  </div>
                  <div className='variety_side_img'>
                    <img src={side5} width="90%" alt="Sidebar" className="sec_img" />
                  </div>
               
              </Carousel>
            )}
          </div>

          <div className="col-9">
            <ProductFruit searchQuery={searchQuery} category={selectedCategory} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductContent;
