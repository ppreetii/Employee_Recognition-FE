import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: "90px",
    height: "610px",
    backgroundColor: "#738bdc",
    backgroundImage: "linear-gradient(315deg, #738bdc 0%, #48c3eb 74%)",
    color: "white",
    borderRadius: "10px",
    width: "90%",
    alignSelf: "center",
  },
  span: {
    color: "#003171",
  },
  div: {
    textAlign: "center",
    position: "static",
    display: "flex",
    flexDirection: "column",
    padding: "10px 15px",
    transform: "translate(0px, 100px)",
    justifyContent: "center",
    color: "white",
    margin: "0px",
  },
  typography: {
    display: "block",
    padding: "30px",
    marginBottom: "20px",
    width: "100%",
    height: "70%",
    borderRadius: "50px",
    border: "1px solid white",
    textAlign: "center"
  },
  button : {
    display: "flex",
    justifyContent: "center"
  }
}));
