import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import TokenMenu from "../modal/TokenMenu.js";
import styles from "../../styles/SelectionModalStyles.js";

function SelectionModal(props) {
  const currency = props.currency;
  const { modalState, setModalState } = props.triggerModal;
  const swappedCurrencySetting = props.swappedCurrencySetting;
  return (
    <Dialog
      open={modalState.isOpen}
      onClose={(prev) =>
        setModalState((prev) => {
          return { ...prev, isOpen: !prev.isOpen };
        })
      }
    >
      <DialogTitle>Select A Token</DialogTitle>
      <DialogContent>
        <DialogContentText>Choose an available crypto token</DialogContentText>
        <TokenMenu
          swappedCurrencySetting={swappedCurrencySetting}
          currency={Object.keys(currency)}
          triggerModal={props.triggerModal}
        />
      </DialogContent>
    </Dialog>
  );
}

export default SelectionModal;
