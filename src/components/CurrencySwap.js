import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import SwapField from "./SwapField";
import SelectionModal from "./modal/SelectionModal";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import "../styles/CurrencySwap.css";

function CurrencySwap(props) {
  const currency = props.currency;
  const [modalState, setModalState] = useState({ isOpen: false, openFor: "" });
  const [isHovered, setIsHovered] = useState(false);
  const triggerModal = { modalState: modalState, setModalState: setModalState };
  const [swappedCurrency, setSwappedCurrency] = useState({
    pay: { currency: "", amount: 0 },
    receive: { currency: "", amount: 0 },
  });
  const swappedCurrencySetting = {
    swappedCurrency: swappedCurrency,
    setSwappedCurrency: setSwappedCurrency,
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const renderSwapIcon = isHovered ? (
    <SwapHorizIcon fontSize="large" htmlColor="gray" />
  ) : (
    <KeyboardDoubleArrowRightIcon fontSize="large" htmlColor="gray" />
  );

  return (
    <div className="app">
      <Box className="swap-interface">
        <SwapField
          fieldType="pay"
          triggerModal={triggerModal}
          swappedCurrencySetting={swappedCurrencySetting}
        />

        <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {renderSwapIcon}
        </Button>

        <SwapField
          fieldType="receive"
          triggerModal={triggerModal}
          swappedCurrencySetting={swappedCurrencySetting}
        />
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
