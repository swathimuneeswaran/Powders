import React from 'react';
import '../styles/ProductPage.css';
import apple_flake from "../assets/fruitflakes/apple_flake.png";
import apple_des_flake from "../assets/fruitpowder/apple_des_flake.jpeg";


const product_description = [{
  id: 1,
  name: "Dehydrated Apple Flakes",
  image: apple_flake,
  side_image:apple_des_flake,
  premium_quality: "We source our apples from trusted orchards and employ advanced dehydration techniques to preserve maximum flavour and nutrients.",
  all_natural: "Free from artificial color, flavours, and preservatives, our apple flakes offer pure, natural goodness.",
  rich_flavour: "The dehydration process intensifies the inherent sweetness and tartness of apples, enhancing the taste of your dishes.",
  convenient: "Easy to store and use, our apple flakes eliminate the need for peeling and slicing fresh apples.",
  versatile: "Perfect for a wide range of recipes including pies, muffins, sauces, granolas, salads, and more.",
  nutritional_benefits: "Apples are renowned for their nutritional value, and our dehydrated flakes retain these benefits. They are rich in dietary fibre, vitamins, and antioxidants, promoting overall health and well-being.",
  how_to_use: "• Rehydration: Simply soak the flakes in warm water or juice for about 10 minutes to restore their natural texture and flavour.",
  how_to_use2:"• Direct Use: Add directly to your recipes during cooking or baking to impart a concentrated apple flavour.",
  packaging: "Our Dehydrated Apple Flakes are available in various packaging sizes to suit your requirements, ensuring freshness and extending shelf life. Whether for household use, retail sale, or industrial applications, our packaging preserves the quality of the product."
}];

const ProductDescription = () => {
  return (
    <div className="product-page" style={{marginTop: "180px"}}>
      {product_description.map((product) => (
        <div className="product-info" key={product.id}>
          <div className="product-images">
            <img src={product.image} alt="Dehydrated Apple Flakes" className="main-image" />
            <img src={product.side_image} alt="Additional Product Image" className="side-image" />
          </div>
          
          <div className="vertical-line"></div> {/* Vertical line separator */}

          <div className="product-content">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-subtitle">Premium Quality & Nutritional Benefits</p>

            <div className="product-features">
              <h2>Features</h2>
              <ul>
                <li><span>Premium Quality: </span>{product.premium_quality}</li>
                <li><span>All Natural:</span> {product.all_natural}</li>
                <li><span>Rich Flavour: </span>{product.rich_flavour}</li>
                <li><span>Convenient: </span>{product.convenient}</li>
                <li><span>Versatile: </span>{product.versatile}</li>
                <li><span>Nutritional Benefits: </span>{product.nutritional_benefits}</li>
              </ul>
            </div>

            <div className="product-description">
              <h2>How to Use</h2>
              <p>{product.how_to_use}</p>
              <p>{product.how_to_use2}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDescription;
