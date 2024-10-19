import React, { useState, useEffect } from 'react';
import CoinTable from './components/CoinTable';
import SearchBar from './components/SearchBar';
import SortButtons from './components/SortButtons';
import './App.css';

const App = () => {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('');

  // Fetch data using async/await
  const fetchDataWithAsync = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      );
      const data = await response.json();
      setCoins(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDataWithAsync();
  }, []);

  // Handle search term
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Handle sorting
  const handleSort = (type) => {
    setSortType(type);
    const sortedCoins = [...coins];
    if (type === 'market_cap') {
      sortedCoins.sort((a, b) => b.market_cap - a.market_cap);
    } else if (type === 'percentage_change') {
      sortedCoins.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
    }
    setCoins(sortedCoins);
  };

  // Filtered coins based on search term
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <div className="search-sort-container">
        <SearchBar onSearch={handleSearch} />
        <SortButtons onSort={handleSort} />
      </div>
      <CoinTable coins={filteredCoins} />
    </div>
  );
};

export default App;
