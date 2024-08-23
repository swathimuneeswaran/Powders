import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/ProductPage.css";
import { products } from "../../productslist/product.js";

const ProductFruit = ({ searchQuery = '', category = '' }) => {
  // Ensure query and category are strings and provide default values
  const query = searchQuery ? searchQuery.toLowerCase() : '';
  const cat = category || ''; // No conversion to lowercase for category

  // Check if products array is available
  if (!Array.isArray(products)) {
    console.error("Products array is not available.");
    return <div>Error loading products.</div>;
  }

  // Function to filter products by category
  const filterByCategory = (products, category) => {
    return products.filter(product =>
      product.category && product.category.includes(category)
    );
  };

  // Filter products based on category first
  const categoryFilteredProducts = filterByCategory(products, cat);

  // Filter category-filtered products based on search query
  const filteredProducts = categoryFilteredProducts.filter(product =>
    product.name && product.name.toLowerCase().includes(query)
  );

  return (
    <div className="container">
      <div className="product-content">
        <h1 className="text-center">Our <span style={{ color: "green" }}>Products</span></h1>
      </div>

      <div className="scrollable-content">
        <div className="row" >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, id) => (
              <div key={id} className="col-12 col-sm-12 col-md-4 mb-4">
                <div className="card h-100">
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
