import React from "react";
import SearchIcon from "../../../images/search-icon.svg";

const Search = ({ handleSearch }) => {
  return (
    <div className="navRightContainer">
      <label>
        <img src={SearchIcon} alt="search" className="search-icon" />
        <input
          type="search"
          placeholder="Search for a movie"
          className="searchInput"
          onChange={(e) => handleSearch(e)}
        />
      </label>
    </div>
  );
};
export default Search;
