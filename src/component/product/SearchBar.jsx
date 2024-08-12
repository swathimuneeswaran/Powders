import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const SearchBar = () => {
  return (
    <div className='contain'>
      <div className='contain-content'>
        <div className="category-container">
          <select className="category-dropdown">
            <option value="all">All Categories</option>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
            <option value="flowers">Flowers</option>
            <option value="herbs">Herbs</option>
          </select>
        </div>
        <div className="search-container">
          <SearchIcon className="search-icon" />
          <input type="text" placeholder="Search..." />
          <CloseIcon className="close-icon" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
