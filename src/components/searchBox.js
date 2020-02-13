import React from 'react';

const SearchBox = ({ handleSearch }) => {
    return ( 
        <input
        type="text"
        name="query"
        className="form-control my-3"
        placeholder="Search..."
        onChange={e => handleSearch(e)}
        />
     );
}
 
export default SearchBox;