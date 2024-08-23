import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductPage.css';
import { products } from "../productslist/product.js";
import RelatedProducts from '../component/product/RelatedProducts.jsx';
import Footer from '../component/Footer.jsx';

const ProductDescription = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find(item => item.id === parseInt(id)); // Find the product by ID

  if (!product) {
    return <div>Product not found</div>;
  }

  const [currentImage, setCurrentImage] = useState(0);
  const [isHowToUseOpen, setIsHowToUseOpen] = useState(false);
  const [isPackagingOpen, setIsPackagingOpen] = useState(false);

  useEffect(() => {
    // Scroll to the top when the component mounts or the product ID changes
    window.scrollTo(0, 0);

    const imageInterval = setInterval(() => {
      setCurrentImage((prevIndex) => 
        prevIndex === product.side_images.length ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(imageInterval); // Cleanup interval on component unmount
  }, [product.side_images.length, id]); // Add `id` to dependency array to trigger scroll on ID change

  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  const toggleHowToUse = () => {
    setIsHowToUseOpen(!isHowToUseOpen);
  };

  const togglePackaging = () => {
    setIsPackagingOpen(!isPackagingOpen);
  };

  // Find related products (for simplicity, assume the related products are from the same category)
  const relatedProducts = products.filter(
    item => item.category === product.category && item.id !== product.id
  ).slice(0, 4); // Get the first 4 related products

  return (
    <>
    <div className="product-page">
      <div className="product-info">
        <div className="product-images">
          <div className={`main-image-container ${isHowToUseOpen || isPackagingOpen ? 'expanded' : ''}`}>
            <img
              src={currentImage === 0 ? product.image : product.side_images[currentImage - 1]}
              alt="Main Product Image"
              className={`main-image ${isHowToUseOpen || isPackagingOpen ? 'expanded' : ''}`}
            />
          </div>
          <div className="side-images">
            <div
              className={`side-image ${currentImage === 0 ? 'active expanded' : ''}`}
              onClick={() => handleImageClick(0)}
            >
              <img
                src={product.image}
                alt="Main Product Image"
              />
            </div>
            {product.side_images.map((side_image, index) => (
              <div
                key={index}
                className={`side-image ${currentImage === index + 1 ? 'active expanded' : ''}`}
                onClick={() => handleImageClick(index + 1)}
              >
                <img
                  src={side_image}
                  alt={`Additional Product Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="product-content1">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-subtitle"> Nutritional Benefits & Features</p>
          <p>{product.nutritional_benefits}</p>
          <div className="product-features">
            <h2>Features</h2>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="flex-boxes">
            <div
              className={`toggle-box ${isHowToUseOpen ? 'open' : ''}`}
              onClick={toggleHowToUse}
            >
              <h2>How to Use</h2>
              <div className={`box-content ${isHowToUseOpen ? 'expanded' : ''}`}>
                <ul>
                  {product.how_to_use.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className={`toggle-box ${isPackagingOpen ? 'open' : ''}`}
              onClick={togglePackaging}
            >
              <h2>Packaging</h2>
              <div className={`box-content ${isPackagingOpen ? 'expanded' : ''}`}>
                <p>{product.packaging}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Related Products Section */}
      <RelatedProducts relatedProducts={relatedProducts} />
     
    </div>
    <Footer />
    </>
  );
};

export default ProductDescription;
