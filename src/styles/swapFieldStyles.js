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
    backgroundColor: "white",
    "& .MuiFilledInput-root": {
      borderRadius: "5px",
      fontWeight: "bold",
      color: "#686868",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#686868",
      fontWeight: "bold",
      textShadow: "0 0 5px rgba(0,0,0,0.5)",
    },
    "& .MuiInputLabel-root, & .MuiInput-input::placeholder": {
      fontWeight: "bold",
      color: "gray", // Set the color to light gray
    },
  },
}));

export default useStyles;
