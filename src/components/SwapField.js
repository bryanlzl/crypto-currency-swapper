import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function SwapField(props) {
  const { modalState, setModalState } = props.triggerModal;
  return (
    <div>
      <TextField id="filled-basic" label="Currency" variant="filled" />
      <Button
        onClick={() => {
          setModalState((prev) => {
            return { isOpen: !prev.isOpen, openFor: props.fieldType };
          });
        }}
        variant="outlined"
      >
        Select Token
      </Button>
    </div>
  );
}

export default SwapField;
