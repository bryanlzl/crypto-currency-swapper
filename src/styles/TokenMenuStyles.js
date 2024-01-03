import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  inputField: { padding: "15px 0 10px 0" },
  listboxProps: {
    position: "absolute",
    zIndex: 1000,
  },
  slimScrollbar: {
    maxHeight: "300px",
    overflowY: "auto",
    width: "400px",
    marginTop: "10px",
    scrollbarWidth: "thin", // For Firefox
    "&::-webkit-scrollbar": {
      width: "4px", // For Webkit browsers (Chrome, Safari)
    },
    "&::-webkit-scrollbar-thumb": {
      background: "lightgray",
      borderRadius: "2px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  },
}));

export default useStyles;
