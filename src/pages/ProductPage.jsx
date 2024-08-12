import React from 'react'
import SearchBar from '../component/product/SearchBar'
import "../styles/ProductPage.css";
import ProductContent from '../component/product/ProductContent';
import Footer from '../component/Footer';

const ProductPage = () => {
  return (
    <div style={{marginTop:"100px"}}>
        <SearchBar />
        <ProductContent />
        <Footer />
    </div>
  )
}

export default ProductPage