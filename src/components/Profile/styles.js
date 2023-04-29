import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: "10px",
    marginBottom: "10px",
    paddingTop: "35px",
    height: "550px",
    borderRadius: "10px",
    transform: "translate(0px, 100px)",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    position: "relative",
    // backgroundColor: "#738bdc",
    // backgroundImage: "linear-gradient(315deg, #738bdc 0%, #48c3eb 74%)",
  },
  div: {
    width: "70%",
    height: "580px",
    margin: " 0 auto",
    padding: "10px", 
    position: "relative",
    background: "white",
    borderRadius: "10px",
    transform: "translate(0px, 100px)",
  },
  avatar: {
    width: "150px",
    height: "150px",
    margin: " 10px auto",
    padding: "10px",
    position: "relative",
    fontSize: "100px"
  },
  typography: {
    margin: " 0 auto",
    padding: "10px",
    position: "relative",
    fontSize: "30px",
    fontStyle: "bold",
    textAlign: "center",
  },
  span_container: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "20px 20px",
  },
  span_content: {
    border: "1px solid",
    borderRadius: "50px",
    textAlign: "center",
    margin: "5px",
    padding: "10px",
    fontSize: "20px"
  },
  hr: {
    borderColor: "#007ea7",
  },
  spanDay: {
    color: "blue"
  },
  spanWeek: {
    color: "Orange"
  },
  spanMonth: {
    color: "Green"
  }
}));
