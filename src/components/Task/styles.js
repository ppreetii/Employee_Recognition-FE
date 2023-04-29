import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: "0px",
    height: "590px",
    borderRadius: "10px",
    transform: "translate(0px, 100px)",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    display: "flex",
    justifyContent: "center"
    
  },
  typography: {
    textAlign: "center",
    color: "grey",
    alignSelf: "center"
  }
  
}));
