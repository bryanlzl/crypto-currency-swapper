import React, { useEffect, useState } from "react";
import CurrencySwap from "./components/CurrencySwap";
import "./styles/App.css";

function App() {
  const [currency, setCurrency] = useState({});
  const currencyName = {
    BLUR: {
      name: "Blur",
    },
    BNEO: {
      name: "bNEO (Neo)",
    },
    BUSD: {
      name: "Binance USD",
    },
    USD: {
      name: "United States Dollar",
    },
    ETH: {
      name: "Ethereum",
    },
    GMX: {
      name: "GamerCoin",
    },
    STEVMOS: {
      name: "SteveMos Token",
    },
    LUNA: {
      name: "Terra Luna",
    },
    RATOM: {
      name: "Rocket Atom",
    },
    STRD: {
      name: "Star Dollar",
    },
    EVMOS: {
      name: "Evolution Mosiac",
    },
    IBCX: {
      name: "InterBlockchain Exchange",
    },
    IRIS: {
      name: "IrisNet",
    },
    AMPLUNA: {
      name: "Ample Terra Luna",
    },
    KUJI: {
      name: "Kuji Inu",
    },
    STOSMO: {
      name: "Staked Osmosis",
    },
    USDC: {
      name: "USD Coin",
    },
    AXLUSDC: {
      name: "axlUSD Coin",
    },
    ATOM: {
      name: "Cosmos Atom",
    },
    STATOM: {
      name: "Staked Atom",
    },
    OSMO: {
      name: "Osmosis",
    },
    RSWTH: {
      name: "Red SWTH",
    },
    STLUNA: {
      name: "Staked Terra Luna",
    },
    LSI: {
      name: "LunaSwap Index",
    },
    OKB: {
      name: "OKB",
    },
    OKT: {
      name: "OKT",
    },
    SWTH: {
      name: "Switcheo Token",
    },
    USC: {
      name: "Uniswap Coin",
    },
    WBTC: {
      name: "Wrapped Bitcoin",
    },
    WSTETH: {
      name: "Wrapped stETH",
    },
    YieldUSD: {
      name: "Yield USD",
    },
    ZIL: {
      name: "Zilliqa",
    },
  };

  useEffect(() => {
    fetch("https://interview.switcheo.com/prices.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to fetch prices");
        }
        return response.json();
      })
      .then((data) => {
        const formattedData = {};

        data.forEach((item) => {
          const currencyKey = item.currency.toUpperCase();
          const currencyInfo = currencyName[currencyKey];

          formattedData[item.currency] = {
            name: currencyInfo ? currencyInfo.name : item.currency,
            abbv: item.currency,
            date: item.date,
            price: item.price,
          };
        });
        setCurrency(formattedData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="app">
      <CurrencySwap currency={currency} />
    </div>
  );
}

export default App;
