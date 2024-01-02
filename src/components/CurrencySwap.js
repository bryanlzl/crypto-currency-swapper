import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import SwapField from "./SwapField";
import SelectionModal from "./modal/SelectionModal";
import "../styles/CurrencySwap.css";

function CurrencySwap(props) {
  const currency = props.currency;
  const [modalState, setModalState] = useState({ isOpen: false, openFor: "" });
  const triggerModal = { modalState: modalState, setModalState: setModalState };
  const [swappedCurrency, setSwappedCurrency] = useState({
    pay: { currency: "", amount: 0 },
    receive: { currency: "", amount: 0 },
  });
  const swappedCurrencySetting = {
    swappedCurrency: swappedCurrency,
    setSwappedCurrency: setSwappedCurrency,
  };

  return (
    <div className="app">
      <Box className="swap-interface">
        <SwapField fieldType="pay" triggerModal={triggerModal}></SwapField>
        <SwapField fieldType="receive" triggerModal={triggerModal}></SwapField>
      </Box>
      <Button variant="contained" className="swap-button">
        Swap!
      </Button>
      <SelectionModal
        triggerModal={triggerModal}
        currency={currency}
        swappedCurrencySetting={swappedCurrencySetting}
      />
    </div>
  );
}

export default CurrencySwap;
