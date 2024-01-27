// useStyles in your styles file
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  modalContent: { overflowY: "hidden" },
  mainContent: {
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f5f5f5",
  },
}));

export default useStyles;
