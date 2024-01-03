import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import useStyles from "../styles/swapFieldStyles";
import { ArrowDropDown, ExpandMore } from "@mui/icons-material";
import "../styles/SwapField.css";

function SwapField(props) {
  const fieldType = props.fieldType;
  const { modalState, setModalState } = props.triggerModal;
  const { swappedCurrency, setSwappedCurrency } = props.swappedCurrencySetting;
  const currencySelected = swappedCurrency[fieldType]["currency"];
  const swapFieldStyles = useStyles();
  const [amount, setAmount] = useState(0); // Initialize with an empty string
  const handleChange = (event) => {
    event.target.value !== "" ? setAmount(event.target.value) : setAmount(0);
  };
  const amountPlaceholder =
    props.fieldType === "pay" ? "Sell amount" : "Receive amount";
  const openModalHandler = () => {
    setModalState((prev) => {
      return { isOpen: !prev.isOpen, openFor: props.fieldType };
    });
  };
  const currencyDisplay =
    currencySelected === "" ? (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <p>Choose Token</p>
        <ExpandMore fontSize="small" htmlColor="gray" />
      </div>
    ) : (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img
          src={`/assets/tokens/${currencySelected}.svg`}
          alt={currencySelected}
          style={{ marginRight: "10px", maxHeight: "24.5px", maxWidth: "24px" }}
        />
        <p style={{ margin: "0", color: "#686868" }}>{currencySelected}</p>
        <ArrowDropDown fontSize="small" htmlColor="gray" />
      </div>
    );

  return (
    <div>
      <div className="swapFieldMain">
        <Button
          onClick={openModalHandler}
          sx={{
            textTransform: "none",
            color: "#858585",
            fontWeight: "bold",
            letterSpacing: "-0.5px",
            padding: "8px 5px 8px 5px",
            maxHeight: "40px",
            backgroundColor: "#e0e5ea",
            borderRadius: "15px",
            borderBottomLeftRadius: "0",
            borderBottomRightRadius: "0",
          }}
        >
          {currencyDisplay}
        </Button>
        <TextField
          id="filled-number"
          label={amountPlaceholder}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          onChange={handleChange}
          InputProps={{
            disableUnderline: true,
            placeholder: amount === 0 ? "0" : "", // Conditionally render placeholder
            style: {
              borderRadius: "15px",
              borderTopLeftRadius: "0",
              borderTopRightRadius: "0",
            },
          }}
          className={`${swapFieldStyles.noArrows} ${swapFieldStyles.amountField}`}
        />
      </div>
    </div>
  );
}

export default SwapField;
