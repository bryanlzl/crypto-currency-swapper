import React, { useState } from "react";
import CurrencySwap from "./components/CurrencySwap";
import "./styles/App.css";

function App() {
  const currency = {
    BLUR: {
      date: "2023-08-29T07:10:40.000Z",
      price: 0.20811525423728813,
    },
    bNEO: { date: "2023-08-29T07:10:50.000Z", price: 7.1282679 },
    BUSD: {
      date: "2023-08-29T07:10:40.000Z",
      price: 0.9998782611186441,
    },
    USD: { date: "2023-08-29T07:10:30.000Z", price: 1 },
    ETH: {
      date: "2023-08-29T07:10:52.000Z",
      price: 1645.9337373737374,
    },
    GMX: {
      date: "2023-08-29T07:10:40.000Z",
      price: 36.345114372881355,
    },
    STEVMOS: {
      date: "2023-08-29T07:10:40.000Z",
      price: 0.07276706779661017,
    },
    LUNA: {
      date: "2023-08-29T07:10:40.000Z",
      price: 0.40955638983050846,
    },
    RATOM: {
      date: "2023-08-29T07:10:40.000Z",
      price: 10.250918915254237,
    },
    STRD: {
      date: "2023-08-29T07:10:40.000Z",
      price: 0.7386553389830508,
    },
    EVMOS: {
      date: "2023-08-29T07:10:40.000Z",
      price: 0.06246181355932203,
    },
    IBCX: {
      date: "2023-08-29T07:10:40.000Z",
      price: 41.26811355932203,
    },
    IRIS: {
      date: "2023-08-29T07:10:40.000Z",
      price: 0.0177095593220339,
    },
    ampLUNA: {
      date: "2023-08-29T07:10:40.000Z",
      price: 0.49548589830508477,
    },
    KUJI: { date: "2023-08-29T07:10:45.000Z", price: 0.675 },
    STOSMO: { date: "2023-08-29T07:10:45.000Z", price: 0.431318 },
    USDC: { date: "2023-08-29T07:10:40.000Z", price: 0.989832 },
    axlUSDC: { date: "2023-08-29T07:10:40.000Z", price: 0.989832 },
    ATOM: {
      date: "2023-08-29T07:10:50.000Z",
      price: 7.186657333333334,
    },
    STATOM: {
      date: "2023-08-29T07:10:45.000Z",
      price: 8.512162050847458,
    },
    OSMO: {
      date: "2023-08-29T07:10:50.000Z",
      price: 0.3772974333333333,
    },
    rSWTH: { date: "2023-08-29T07:10:40.000Z", price: 0.00408771 },
    STLUNA: {
      date: "2023-08-29T07:10:40.000Z",
      price: 0.44232210169491526,
    },
    LSI: {
      date: "2023-08-29T07:10:50.000Z",
      price: 67.69661525423729,
    },
    OKB: {
      date: "2023-08-29T07:10:40.000Z",
      price: 42.97562059322034,
    },
    OKT: {
      date: "2023-08-29T07:10:40.000Z",
      price: 13.561577966101694,
    },
    SWTH: {
      date: "2023-08-29T07:10:45.000Z",
      price: 0.004039850455012084,
    },
    USC: { date: "2023-08-29T07:10:40.000Z", price: 0.994 },
    USDC: {
      date: "2023-08-29T07:10:40.000Z",
      price: 0.9998782611186441,
    },
    WBTC: {
      date: "2023-08-29T07:10:52.000Z",
      price: 26002.82202020202,
    },
    wstETH: {
      date: "2023-08-29T07:10:40.000Z",
      price: 1872.2579742372882,
    },
    YieldUSD: {
      date: "2023-08-29T07:10:40.000Z",
      price: 1.0290847966101695,
    },
    ZIL: {
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
