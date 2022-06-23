import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import MainHeader from "./layout/MainHeader.jsx";
import MainBody from "./layout/MainBody";

function App() {
  const [cryptoCoins, setCryptoCoins] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  //Data from coingecko api
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCryptoCoins(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //onChange event
  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  //filter by search
  const handleFilterSearch = cryptoCoins.filter((coins) =>
    coins.name.toLowerCase().includes(searchKey.toLowerCase())
  );

  return (
    <div className="App">
      <MainHeader handleChange={handleChange} />
      {handleFilterSearch.map((data) => {
        return (
          <MainBody
            key={data.id}
            name={data.name}
            image={data.image}
            symbol={data.symbol}
            volume={data.market_cap}
            price={data.current_price}
          />
        );
      })}
    </div>
  );
}

export default App;
