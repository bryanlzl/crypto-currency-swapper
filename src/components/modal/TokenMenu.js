import React, { useState } from "react";
import { useTheme, Autocomplete, TextField } from "@mui/material";
import styles from "../../styles/TokenMenuStyles";

function TokenMenu(props) {
  const { swappedCurrency, setSwappedCurrency } = props.swappedCurrencySetting;
  const tokenList = props.currency;
  const { modalState, setModalState } = props.triggerModal;
  const tokenStyles = styles();
  const theme = useTheme();
  const dropDownMaxDepth = window.innerHeight / 3.5;
  const currentToken = swappedCurrency[modalState.openFor];
  const initialToken = currentToken.currency;

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        name !== personName
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  return (
    <div className={tokenStyles.inputField}>
      <Autocomplete
        id="token-search"
        value={initialToken !== "" ? initialToken : null}
        onChange={(event, newValue) => {
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
        }}
        options={tokenList}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Search Token" />
        )}
        renderOption={(props, option) => (
          <li
            {...props}
            style={getStyles(option, currentToken.currency, theme)}
          >
            {option}
          </li>
        )}
        disableClearable
        isOptionEqualToValue={(option, value) => option === value}
        ListboxProps={{
          style: { ...styles.ListboxProps, maxHeight: `${dropDownMaxDepth}px` },
        }}
      />
    </div>
  );
}

export default TokenMenu;
