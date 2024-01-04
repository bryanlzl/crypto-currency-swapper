import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import "../../styles/CompletionModal.css";

function CompletionModal(props) {
  const currency = props.currency;
  const { completionModalState, setCompletionModalState } =
    props.triggerCompModal;
  const { swappedCurrency, setSwappedCurrency } = props.swappedCurrencySetting;
  const payCurrency = swappedCurrency.pay["currency"];
  const receiveCurrency = swappedCurrency.receive["currency"];
  const payAmount = swappedCurrency.pay["amount"];
  const receiveAmount = swappedCurrency.receive["amount"];

  const generateUSDAmount = () => {
    const USDvalue = swappedCurrency.pay["USD"];
    const formattedValue =
      USDvalue >= 1000000000
        ? `${(USDvalue / 1000000000).toLocaleString("en-US", {
            style: "decimal",
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}B`
        : USDvalue >= 1000000
        ? `${(USDvalue / 1000000).toLocaleString("en-US", {
            style: "decimal",
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}M`
        : USDvalue.toLocaleString("en-US", {
            style: "decimal",
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          });
    return formattedValue;
  };
  const USDAmount = generateUSDAmount();

  const toggleCompletionModal = () => {
    setCompletionModalState(!completionModalState);
  };

  const tokenAssetIcons = {
    pay: (
      <img
        src={`/assets/tokens/${payCurrency}.svg`}
        alt="Logo"
        className="tokenIcon"
      />
    ),
    receive: (
      <img
        src={`/assets/tokens/${receiveCurrency}.svg`}
        alt="Logo"
        className="tokenIcon"
      />
    ),
  };

  return payCurrency && payAmount && receiveCurrency && receiveAmount ? (
    <Dialog
      open={completionModalState}
      PaperProps={{ sx: { borderRadius: "15px", maxWidth: "650px" } }}
      onClose={() => setCompletionModalState(!completionModalState)}
    >
      <div style={{ borderRadius: "15px" }}>
        <DialogTitle
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            letterSpacing: "-0.5px",
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            padding: "10px 24px 0px 24px",
            color: "#686868",
          }}
        >
          Transaction Success!
          <div
            style={{
              marginBottom: "7px",
              borderBottom: "1.5px solid #aeaeae",
              width: "100%",
            }}
          ></div>
        </DialogTitle>

        <DialogContent style={{ overflowY: "hidden" }}>
          <DialogContentText
            marginBottom={"10px"}
            flexWrap={true}
            style={{
              letterSpacing: "-0.5px",
              maxWidth: "650px",
              width: "400px",
              margin: "0",
            }}
          >
            <div className="tokenTableSubheader">
              <p className="tokenSubheaderText">Successfully exchanged:</p>
            </div>
            <div className="tokenTable">
              <div className="tokenMain">
                {tokenAssetIcons.pay}
                <div className="tokenMenuText">
                  <p className="tokenNameText tokenHeaderText">
                    {currency[payCurrency]["name"]}
                  </p>
                  <p className="tokenNameText">{payCurrency}</p>
                </div>
              </div>
              <div className="tokenAmountValue">
                <p className="tokenAmountValueText"> {payAmount}</p>
              </div>

              <div className="tokenMainIcon">
                <KeyboardDoubleArrowDownIcon
                  fontSize="large"
                  htmlColor="#373737"
                  style={{ margin: "0" }}
                />
                <p className="USDValueText">${USDAmount}</p>
              </div>

              <div className="tokenMain">
                {tokenAssetIcons.receive}
                <div className="tokenMenuText">
                  <p className="tokenNameText tokenHeaderText">
                    {currency[receiveCurrency]["name"]}
                  </p>
                  <p className="tokenNameText">{receiveCurrency}</p>
                </div>
              </div>
              <div className="tokenAmountValue">
                <p className="tokenAmountValueText"> {receiveAmount}</p>
              </div>
            </div>
          </DialogContentText>
          <Button
            variant="contained"
            className="swap-button"
            sx={{
              marginTop: "10px",
              height: "30px",
              width: "400px",
              backgroundColor: "#9ebede",
              fontWeight: "bold",
              letterSpacing: "-0.5px",
              color: "#434343",
              borderRadius: "10px",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#868bac",
                color: "lightgray",
              },
            }}
            onClick={toggleCompletionModal}
          >
            Continue
          </Button>
        </DialogContent>
      </div>
    </Dialog>
  ) : (
    <Dialog
      open={completionModalState}
      PaperProps={{ sx: { borderRadius: "15px", maxWidth: "650px" } }}
      onClose={() => setCompletionModalState(!completionModalState)}
    >
      <div style={{ borderRadius: "15px" }}>
        <DialogTitle
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            letterSpacing: "-0.5px",
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            padding: "10px 24px 0px 24px",
            color: "#686868",
          }}
        >
          Error
          <div
            style={{
              marginBottom: "7px",
              borderBottom: "1.5px solid #aeaeae",
              width: "100%",
            }}
          ></div>
        </DialogTitle>

        <DialogContent style={{ overflowY: "hidden" }}>
          <DialogContentText
            marginBottom={"10px"}
            flexWrap={true}
            style={{
              letterSpacing: "-0.5px",
              maxWidth: "650px",
              width: "400px",
              margin: "0",
            }}
          >
            <div className="tokenTableSubheader">
              <p className="tokenSubheaderText">
                Please ensure all token fields are filled
              </p>
            </div>
          </DialogContentText>

          <Button
            variant="contained"
            className="swap-button"
            sx={{
              marginTop: "10px",
              height: "30px",
              width: "400px",
              backgroundColor: "#9ebede",
              fontWeight: "bold",
              letterSpacing: "-0.5px",
              color: "#434343",
              borderRadius: "10px",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#868bac",
                color: "lightgray",
              },
            }}
            onClick={toggleCompletionModal}
          >
            Continue
          </Button>
        </DialogContent>
      </div>
    </Dialog>
  );
}

export default CompletionModal;
