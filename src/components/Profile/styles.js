import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  div: {
    width: "70%",
    height: "580px",
    padding: "10px",
    position: "relative",
    borderRadius: "10px",
    transform: "translate(0px, 100px)",
  },
  avatar: {
    width: "150px",
    height: "150px",
    margin: " 10px auto",
    padding: "10px",
    position: "relative",
    fontSize: "100px",
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
    fontSize: "20px",
  },
  spanDay: {
    color: "blue",
  },
  spanWeek: {
    color: "Orange",
  },
  spanMonth: {
    color: "Green",
  },
  drawer: {
    paddingTop: "35px",
    width: "240px",
    borderRadius: "10px",
    transform: "translate(-150px, 90px)",
    direction: "bottom",
    margin: "0px 0px",
  },
  drawerList: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    margin: "10px",
  },
  heroContainer: {
    display: "flex",
    flexDirection: "row",
  },
  editDivContainer: {
    width: "70%",
    height: "580px",
    padding: "10px",
    borderRadius: "10px",
    transform: "translate(0px, 130px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "first baseline",
    justifyContent: "center",
  },
  editTextField: {
    margin: "10px",
    width: "70%",
  },
  editBtnsDiv :{
    display:"flex",
    flexDirection: "row",
    justifyContent: "center",
  }
}));
