import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import MainHeader from "./layout/MainHeader.jsx";

function App() {
  const [cryptoCoins, setCryptoCoins] = useState([]);

  //Data from coingecko
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCryptoCoins(response);
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <MainHeader />
    </div>
  );
}

export default App;
