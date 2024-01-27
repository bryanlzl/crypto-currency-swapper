import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import TokenMenu from "../modal/TokenMenu.jsx";
import styles from "../../styles/SelectionModalStyles.jsx";

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
      onClose={() =>
        setModalState((prev) => {
          return { ...prev, isOpen: !prev.isOpen };
        })
      }
    >
      <div className={modalStyles.mainContent}>
        <DialogTitle
          sx={{
            letterSpacing: "-0.5px",
            fontWeight: "bold",
            fontSize: "20px",
            color: "#cbcbcb",
            textAlign: "center",
            backgroundColor: "#4b4f68",
          }}
        >
          Choose token to {modalMessage}
        </DialogTitle>
        <DialogContent sx={{ overflowY: "hidden" }}>
          <DialogContentText
            marginBottom={"10px"}
            flexWrap={true}
            sx={{
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
            sx={{ width: "100%" }}
          />
        </DialogContent>
      </div>
    </Dialog>
  );
}

export default SelectionModal;
