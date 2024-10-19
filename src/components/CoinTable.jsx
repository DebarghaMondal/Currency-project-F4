import React from 'react';

const CoinTable = ({ coins }) => {
  return (
    <table>
      <tbody>
        {coins.map((coin) => (
          <tr key={coin.id}>
            <td>
              <div className="coin-image-name">
                <img src={coin.image} alt={coin.name} width="30" />
                <span>{coin.name}</span>
              </div>
            </td>
            <td className="coin-symbol">{coin.symbol}</td>
            <td>${coin.current_price}</td>
            <td>${coin.total_volume}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CoinTable;
