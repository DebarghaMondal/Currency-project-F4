import React from 'react';

const SortButtons = ({ onSort }) => {
  return (
    <>
      <button onClick={() => onSort('market_cap')}>Sort by Mkt Cap</button>
      <button onClick={() => onSort('percentage_change')}>Sort by percentage</button>
    </>
  );
};

export default SortButtons;
