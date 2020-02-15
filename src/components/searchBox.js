import React from "react";

const SearchBox = ({ handleSearch }) => {
  return (
    <input
      style={{
        width: "60%",
        borderStyle: "solid",
        borderRadius: "4px",
        borderColor: "rgb(175, 33, 33)",
        display: "block",
        margin: "0 auto",
        height: "50px",
        marginBottom: "20px"
      }}
      type="text"
      name="query"
      placeholder="Search by name..."
      onChange={e => handleSearch(e)}
    />
  );
};

export default SearchBox;
