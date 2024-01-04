import React, { useState } from "react";
import { Button, Box, Tooltip } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import SwapField from "./SwapField";
import SelectionModal from "./modal/SelectionModal";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import "../styles/CurrencySwap.css";

function CurrencySwap(props) {
  const currency = props.currency;
  const [modalState, setModalState] = useState({ isOpen: false, openFor: "" });
  const [isHovered, setIsHovered] = useState(false);
  const triggerModal = { modalState: modalState, setModalState: setModalState };
  const [swappedCurrency, setSwappedCurrency] = useState({
    pay: { currency: "", amount: 0, USD: 0 },
    receive: { currency: "", amount: 0 },
    conversionRate: {
      biggerCurrency: "",
      smallerCurrency: "",
      bigToSmallRate: 0,
    },
  });
  const handleCurrencySwap = () => {
    setSwappedCurrency((prev) => {
      return {
        ...prev,
        pay: {
          currency: prev.receive.currency,
          amount: prev.receive.amount,
          USD: prev.pay.USD,
        },
        receive: { currency: prev.pay.currency, amount: prev.pay.amount },
      };
    });
  };
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
    <DoubleArrowIcon fontSize="large" htmlColor="gray" />
  );

  return (
    <div className="main">
      <Box className="swap-interface">
        <SwapField
          fieldType="pay"
          triggerModal={triggerModal}
          swappedCurrencySetting={swappedCurrencySetting}
          currency={currency}
        />
        <Tooltip
          title="Swap Currency"
          arrow
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, -5],
                  },
                },
              ],
            },
          }}
        >
          <Button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            disableRipple
            disableFocusRipple
            style={{
              height: "40px",
              position: "relative",
              width: "auto",
            }}
            onClick={handleCurrencySwap}
          >
            {renderSwapIcon}
          </Button>
        </Tooltip>

        <SwapField
          fieldType="receive"
          triggerModal={triggerModal}
          swappedCurrencySetting={swappedCurrencySetting}
          currency={currency}
        />
      </Box>
      <Button
        variant="contained"
        className="swap-button"
        style={{
          width: "100%",
          backgroundColor: "#5ba1e6",
          fontWeight: "bold",
          letterSpacing: "-0.5px",
          color: "#efefef",
          borderRadius: "10px",
        }}
      >
        Exchange
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
