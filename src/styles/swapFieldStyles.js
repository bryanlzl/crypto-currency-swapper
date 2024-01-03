import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  noArrows: {
    "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button":
      {
        "-webkit-appearance": "none",
        margin: 0,
      },
    "& input[type=number]": {
      "-moz-appearance": "textfield", // Firefox
    },
  },
  amountField: {
    "& .MuiFilledInput-root": {
      borderRadius: "5px",
      fontWeight: "bold",
      color: "#686868",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#686868",
      fontWeight: "bold",
      textShadow: "0 0 5px rgba(97, 159, 218, 0.75)",
    },
    "& .MuiInputLabel-root, & .MuiInput-input::placeholder": {
      fontWeight: "bold",
      color: "#a2a2a2",
    },
  },
}));

export default useStyles;
