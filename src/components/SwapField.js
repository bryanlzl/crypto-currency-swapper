import React, { useState, useEffect } from "react";
import { TextField, InputLabel, Button } from "@mui/material";
import useStyles from "../styles/swapFieldStyles";
import { ArrowDropDown, ExpandMore, InfoOutlined } from "@mui/icons-material";
import "../styles/SwapField.css";

function SwapField(props) {
  const currency = props.currency;
  const fieldType = props.fieldType;
  const { modalState, setModalState } = props.triggerModal;
  const { swappedCurrency, setSwappedCurrency } = props.swappedCurrencySetting;
  const [isHovered, setIsHovered] = useState(false);
  const currencySelected = swappedCurrency[fieldType]["currency"];
  const swapFieldStyles = useStyles();
  const [amount, setAmount] = useState(0); // Initialize with an empty string
  const handleChange = (event) => {
    event.target.value !== "" ? setAmount(event.target.value) : setAmount(0);
    setSwappedCurrency((prev) => {
      if (
        swappedCurrency[fieldType]["currency"] !== "" &&
        fieldType === "pay"
      ) {
        return {
          ...prev,
          [fieldType]: {
            ...prev[fieldType],
            amount: Number(event.target.value),
            USD:
              swappedCurrency[fieldType]["amount"] *
              currency[prev[fieldType]["currency"]]["price"],
          },
        };
      } else {
        return {
          ...prev,
          [fieldType]: {
            ...prev[fieldType],
            amount: Number(event.target.value),
          },
        };
      }
    });
  };
  const amountPlaceholder =
    props.fieldType === "pay" ? "Sell Amount" : "Receive Amount";
  const openModalHandler = () => {
    setModalState((prev) => {
      return { ...prev, isOpen: !prev.isOpen, openFor: props.fieldType };
    });
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const currencyDisplay =
    currencySelected === "" ? (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          maxHeight: "100%",
        }}
      >
        <p
          style={{
            bottom: "12px",
            margin: "0",
            padding: "3px 5px 8px 5px",
            maxHeight: "24.5px",
          }}
        >
          Choose Token
        </p>
        <ExpandMore fontSize="small" />
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
          style={{
            marginRight: "10px",
            maxHeight: "24.5px",
            maxWidth: "24px",
            "&:hover": {
              boxShadow: "0 0 5px rgba(97, 159, 218, 1)",
            },
          }}
          className={`${isHovered ? "img-hover-effect" : ""}`}
        />
        <p style={{ margin: "0", color: "#686868" }}>{currencySelected}</p>
        <ArrowDropDown fontSize="small" htmlColor="#686868" />
      </div>
    );

  const BottomLabel = () => {
    if (fieldType === "pay") {
      console.log("shanty", swappedCurrency[fieldType]);
      const USDvalue = swappedCurrency[fieldType]["USD"];
      const message = USDvalue !== 0 && `$${USDvalue}`;
      console.log("cunty", USDvalue, message);
      return <p style={{ margin: "0" }}>{message}</p>;
    }
  };

  useEffect(() => {
    setAmount(swappedCurrency[fieldType]["amount"]);
    console.log(swappedCurrency);
  }, [swappedCurrency]);

  return (
    <div>
      <div className="swapFieldMain">
        <Button
          onClick={openModalHandler}
          sx={{
            textTransform: "none",
            color: "#858585",
            fontWeight: "bold",
            fontSize: "20px",
            letterSpacing: "-0.5px",
            padding: "8px 5px 8px 5px",
            maxHeight: "100px",
            backgroundColor: "#dfdfdf",
            borderRadius: "15px",
            borderBottomLeftRadius: "0",
            borderBottomRightRadius: "0",
            "&:hover": {
              textShadow: "0 0 5px rgba(97, 159, 218, 1)",
              backgroundColor: "#efefef",
            },
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {currencyDisplay}
        </Button>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <TextField
            id="filled-number"
            label={amountPlaceholder}
            type="number"
            InputLabelProps={{
              shrink: true,
              style: { fontSize: "18px", letterSpacing: "-0.5px" },
            }}
            value={amount !== 0 && amount}
            variant="filled"
            onChange={handleChange}
            InputProps={{
              disableUnderline: true,
              placeholder: amount === 0 ? "0" : "",
              sx: {
                borderRadius: "0 !important",
                height: "60px",
                fontSize: "25px",
                padding: "0px 20px 0px 20px !important",
                backgroundColor: `${isHovered && "#efefef"}`,
                "&:hover": {
                  backgroundColor: "", // Override background color on hover
                },
              },
            }}
            inputProps={{ className: "custom-input-class" }}
            className={`${swapFieldStyles.noArrows} ${swapFieldStyles.amountField}`}
          />
          <InputLabel
            style={{
              borderRadius: "0",
              borderBottomLeftRadius: "15px",
              borderBottomRightRadius: "15px",
              backgroundColor: "#dfdfdf",
              color: "",
              fontSize: "13px",
              letterSpacing: "-0.5px",
              fontWeight: "bold",
              padding: "3px 20px 0px 20px",
              height: "20px",
              borderTop: "1px",
              borderColor: "#dfdfdf",
            }}
          >
            <BottomLabel></BottomLabel>
          </InputLabel>
        </div>
      </div>
    </div>
  );
}

export default SwapField;
