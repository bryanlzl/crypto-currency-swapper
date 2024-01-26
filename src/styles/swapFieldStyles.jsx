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
      color: "#d9d9d9",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#d9d9d9",
      fontWeight: "bold",
      textShadow: "0 0 1px rgba(255, 255, 0, 0.75)",
    },
    "& .MuiInputLabel-root, & .MuiInput-input::placeholder": {
      fontWeight: "bold",
      color: "#d9d9d9",
    },
  },
}));

export default useStyles;
