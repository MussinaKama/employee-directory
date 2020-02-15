import React from "react";

const SearchBox = ({ handleSearch }) => {
  return (
    <input
      style={{
        width: "60%",
        boxSizing: "border-box",
        borderRadius: "5px solid rgb(175, 33, 33)",
        display: "block",
        margin: "0 auto",
        height: "100"
      }}
      type="text"
      name="query"
      placeholder="Search by name..."
      onChange={e => handleSearch(e)}
    />
  );
};

export default SearchBox;
