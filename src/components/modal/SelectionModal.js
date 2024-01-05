import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import TokenMenu from "../modal/TokenMenu.js";
import styles from "../../styles/SelectionModalStyles.js";

function SelectionModal(props) {
  const currency = props.currency;
  const { modalState, setModalState } = props.triggerModal;
  const swappedCurrencySetting = props.swappedCurrencySetting;
  const modalStyles = styles();
  const modalMessage = modalState.openFor === "pay" ? "sell" : "receive";
  return (
    <Dialog
      open={modalState.isOpen}
      PaperProps={{ sx: { borderRadius: "15px" } }}
      onClose={(prev) =>
        setModalState((prev) => {
          return { ...prev, isOpen: !prev.isOpen };
        })
      }
    >
      <div
        style={{
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f5f5f5",
        }}
      >
        <DialogTitle
          style={{
            letterSpacing: "-0.5px",
            fontWeight: "bold",
            fontSize: "20px",
            color: "#cbcbcb",
            textAlign: "center",
            backgroundColor: "#1d1f2c",
          }}
        >
          Choose token to {modalMessage}
        </DialogTitle>
        <DialogContent style={{ overflowY: "hidden" }}>
          <DialogContentText
            marginBottom={"10px"}
            flexWrap={true}
            style={{
              fontWeight: "bold",
              color: "#8c8c8c",
              letterSpacing: "-0.5px",
              marginTop: "18px",
            }}
          >
            Enter keyword or select from list below
          </DialogContentText>
          <TokenMenu
            swappedCurrencySetting={swappedCurrencySetting}
            currency={currency}
            triggerModal={props.triggerModal}
            style={{ width: "100%" }}
          />
        </DialogContent>
      </div>
    </Dialog>
  );
}

export default SelectionModal;
