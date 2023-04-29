import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";
import { hover } from "@testing-library/user-event/dist/hover";

export default makeStyles((theme) => ({
  appBar: {
    margin: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: "5px 10px",
    backgroundColor: "#007ea7",
    backgroundImage: "linear-gradient(315deg, #007ea7 0%, #80ced7 74%)",
    boxShadow: "none"
  },
  heading: {
    color: "rgb(57, 174, 220)",
    textDecoration: "none",
  },
  image: {
    alignSelf: "center",
    paddingTop: "10px",
  },
  nav_menu_option: {
    display: "flex",
    justifyContent: "space-between",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    // color: theme.palette.getContrastText(deepPurple[500]),
    // backgroundColor: deepPurple[500],
  },
  menu: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "400px",
  },
  menuOption: {
    color: "white",
    textDecoration: "none",
  }
}));
