import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import styles from "../../styles/TokenMenuStyles";
import { Stack } from "@mui/material";

function TokenMenu(props) {
  const { swappedCurrency, setSwappedCurrency } = props.swappedCurrencySetting;
  const { modalState, setModalState } = props.triggerModal;
  const initialToken = swappedCurrency[modalState.openFor].currency;
  const tokenStyles = styles();
  const [searchValue, setSearchValue] = useState("");
  const filteredTokenList = props.currency.filter((option) =>
    option.toLowerCase().includes(searchValue.toLowerCase())
  );

  const selectTokenHandler = (newValue) => {
    setSwappedCurrency((prev) => ({
      ...prev,
      [modalState.openFor]: {
        ...prev[modalState.openFor],
        currency: newValue,
      },
    }));
    setModalState((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
    }));
  };

  const renderAdornment = () => {
    const selectedCurrency = swappedCurrency[modalState.openFor].currency;
    return selectedCurrency !== "" ? (
      <InputAdornment position="start">
        <img
          src={`/assets/tokens/${selectedCurrency}.svg`}
          alt="Logo"
          style={{ width: "24px", marginRight: "8px" }}
        />
      </InputAdornment>
    ) : null;
  };

  return (
    <div className={tokenStyles.inputField}>
      <TextField
        variant="outlined"
        label="Search Token"
        value={searchValue}
        placeholder={initialToken}
        onChange={(e) => setSearchValue(e.target.value)}
        style={{ width: "100%" }}
        InputProps={{
          startAdornment: renderAdornment(),
          readOnly: false, // Allow typing
        }}
      />
      <div className={tokenStyles.slimScrollbar}>
        <List disablePadding>
          {filteredTokenList.map((option) => (
            <ListItem
              key={option}
              button
              onClick={() => selectTokenHandler(option)}
            >
              <ListItemText
                primary={
                  <Stack
                    flexDirection={"row"}
                    justifyItems={"space-between"}
                    gap={2}
                  >
                    <img
                      src={`/assets/tokens/${option}.svg`}
                      alt="Logo"
                      style={{ width: "24px", marginRight: "8px" }}
                    />
                    {option}
                  </Stack>
                }
              />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}

export default TokenMenu;
