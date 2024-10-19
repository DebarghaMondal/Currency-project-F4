import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleInputChange = (e) => {
    setTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={term}
      onChange={handleInputChange}
      placeholder="Search By Name or Symbol"
    />
  );
};

export default SearchBar;
