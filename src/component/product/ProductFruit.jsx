import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/ProductPage.css";
import { products } from "../../productslist/product.js";

const ProductFruit = ({ searchQuery = '', categories = [] }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const scrollableContentRef = useRef(null); // Create a ref for the scrollable content

  // Function to filter products by categories and search query
  const filterProducts = () => {
    let filtered = products;

    if (categories.length > 0) {
      filtered = filtered.filter(product =>
        categories.some(category => product.category && product.category.includes(category))
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    filterProducts();

    // Scroll to the top of the scrollable content when products are filtered
    if (scrollableContentRef.current) {
      scrollableContentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: Adds a smooth scrolling effect
      });
    }
  }, [searchQuery, categories]);

  return (
    <div className="container">
      <div className="product-content">
        <h1 className="text-center">Our <span style={{ color: "green" }}>Products</span></h1>
      </div>

      <div 
        className="scrollable-content" 
        ref={scrollableContentRef} // Assign the ref to the scrollable content
        style={{ maxHeight: '100vh', overflowY: 'auto' }} // Ensure it is scrollable
      >
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, id) => (
              <div key={id} className="col-5 col-sm-6 col-md-3 mb-4 column_product">
                <div className="card ">
                  <Link to={`/details/${item.id}`}>
                    <button className="card-button">More Info</button>
                  </Link>
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
            ))
          ) : (
            <div className="text-center">No products found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductFruit;
