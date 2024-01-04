import React, { useState } from "react";
import CurrencySwap from "./components/CurrencySwap";
import "./styles/App.css";

function App() {
  const currency = {
    BLUR: {
      name: "Blur",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.20811525423728813,
    },
    bNEO: {
      name: "bNEO (Neo)",
      date: "2023-08-29T07:10:50.000Z",
      price: 7.1282679,
    },
    BUSD: {
      name: "Binance USD",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.9998782611186441,
    },
    USD: {
      name: "United States Dollar",
      date: "2023-08-29T07:10:30.000Z",
      price: 1,
    },
    ETH: {
      name: "Ethereum",
      date: "2023-08-29T07:10:52.000Z",
      price: 1645.9337373737374,
    },
    GMX: {
      name: "GamerCoin",
      date: "2023-08-29T07:10:40.000Z",
      price: 36.345114372881355,
    },
    STEVMOS: {
      name: "SteveMos Token",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.07276706779661017,
    },
    LUNA: {
      name: "Terra Luna",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.40955638983050846,
    },
    RATOM: {
      name: "Rocket Atom",
      date: "2023-08-29T07:10:40.000Z",
      price: 10.250918915254237,
    },
    STRD: {
      name: "Star Dollar",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.7386553389830508,
    },
    EVMOS: {
      name: "Evolution Mosiac",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.06246181355932203,
    },
    IBCX: {
      name: "InterBlockchain Exchange",
      date: "2023-08-29T07:10:40.000Z",
      price: 41.26811355932203,
    },
    IRIS: {
      name: "IrisNet",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.0177095593220339,
    },
    ampLUNA: {
      name: "Ample Terra Luna",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.49548589830508477,
    },
    KUJI: {
      name: "Kuji Inu",
      date: "2023-08-29T07:10:45.000Z",
      price: 0.675,
    },
    STOSMO: {
      name: "Staking Osmosis",
      date: "2023-08-29T07:10:45.000Z",
      price: 0.431318,
    },
    USDC: {
      name: "USD Coin",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.989832,
    },
    axlUSDC: {
      name: "axlUSD Coin",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.989832,
    },
    ATOM: {
      name: "Cosmos Atom",
      date: "2023-08-29T07:10:50.000Z",
      price: 7.186657333333334,
    },
    STATOM: {
      name: "Staking Atom",
      date: "2023-08-29T07:10:45.000Z",
      price: 8.512162050847458,
    },
    OSMO: {
      name: "Osmosis",
      date: "2023-08-29T07:10:50.000Z",
      price: 0.3772974333333333,
    },
    rSWTH: {
      name: "Red SWTH",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.00408771,
    },
    STLUNA: {
      name: "Staked Terra Luna",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.44232210169491526,
    },
    LSI: {
      name: "LunaSwap Index",
      date: "2023-08-29T07:10:50.000Z",
      price: 67.69661525423729,
    },
    OKB: {
      name: "OKB",
      date: "2023-08-29T07:10:40.000Z",
      price: 42.97562059322034,
    },
    OKT: {
      name: "OKT",
      date: "2023-08-29T07:10:40.000Z",
      price: 13.561577966101694,
    },
    SWTH: {
      name: "Switcheo Token",
      date: "2023-08-29T07:10:45.000Z",
      price: 0.004039850455012084,
    },
    USC: {
      name: "Uniswap Coin",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.994,
    },
    USDC: {
      name: "USD Coin",
      date: "2023-08-29T07:10:40.000Z",
      price: 0.9998782611186441,
    },
    WBTC: {
      name: "Wrapped Bitcoin",
      date: "2023-08-29T07:10:52.000Z",
      price: 26002.82202020202,
    },
    wstETH: {
      name: "Wrapped stETH",
      date: "2023-08-29T07:10:40.000Z",
      price: 1872.2579742372882,
    },
    YieldUSD: {
      name: "Yield USD",
      date: "2023-08-29T07:10:40.000Z",
      price: 1.0290847966101695,
    },
    ZIL: {
      name: "Zilliqa",
      date: "2023-08-29T07:10:50.000Z",
      price: 0.01651813559322034,
    },
  };

  return (
    <div className="app">
      <CurrencySwap currency={currency} />
    </div>
  );
}

export default App;
