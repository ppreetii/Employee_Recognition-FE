import React, { useState, useEffect } from "react";
import {
  Typography,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  TextField,
  Box,
  Button,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EditIcon from "@material-ui/icons/Edit";
import { Link, useLocation } from "react-router-dom";

import useStyles from "./styles";
import axios from "axios";

const Profile = (props) => {
  const location = useLocation();
  const classes = useStyles();
  let id = props.match.params.id;

  const [user, setUser] = useState({
    id: "id",
    name: "name",
    designation: "designation",
    bonusStars: 0,
    empOfDayCount: 0,
    empOfWeekCount: 0,
    empOfMonthCount: 0,
  });
  const [userId, setUserId] = useState(id);
  const [currentPath, setCurrentPath] = useState(
    location.pathname.replace(":id", userId)
  );
  const [designation, setDesignation] = useState(user.designation);

  const handleEditClick = () => {
    setUserId(userId);
    setCurrentPath(`/profile/edit/${userId}`);
  };
  const handleProfileClick = () => {
    setUserId(userId);
    setCurrentPath(`/profile/${userId}`);
  };
  const handleDesignationChange = (event) => {
    setDesignation(event.target.value);
  };

  const handleSaveClick = () => {
    axios
      .patch(`http://localhost:5000/api/v1.0/employees/${userId}`, {
        designation,
      })
      .then((response) => {
        setUser(response.data);
        setUserId(user.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDeleteClick = () => {
    axios
      .patch(`http://localhost:5000/api/v1.0/employees/${userId}`, {
        designation,
      })
      .then((response) => {
        setUser(response.data);
        setUserId(user.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1.0/employees/${userId}`)
      .then((response) => {
        setUser(response.data);
        setDesignation(user.designation);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  return (
    <div className={classes.heroContainer}>
      <Drawer variant="permanent" className={classes.drawer}>
        <List className={classes.drawerList}>
          <ListItem
            key="Profile"
            sx={{ display: "block" }}
            style={{ cursor: "pointer" }}
            component={Link}
            to="/profile/:id"
            onClick={handleProfileClick}
          >
            <AccountCircleIcon
              sx={{
                minWidth: 0,
                mr: "auto",
                justifyContent: "center",
              }}
            ></AccountCircleIcon>
            <ListItemText primary="Profile" sx={{ opacity: 0 }} />
          </ListItem>
          <ListItem
            key="Edit"
            sx={{ display: "block" }}
            style={{ cursor: "pointer" }}
            component={Link}
            to="/profile/edit/:id"
            onClick={handleEditClick}
          >
            <EditIcon
              sx={{
                minWidth: 0,
                mr: "auto",
                justifyContent: "center",
              }}
            ></EditIcon>
            <ListItemText primary="Edit" sx={{ opacity: 0 }} />
          </ListItem>
        </List>
      </Drawer>
      {currentPath === `/profile/edit/${userId}` ? (
        <>
          <Box
            component="form"
            className={classes.editDivContainer}
            noValidate
            autoComplete="off"
          >
            {Object.keys(user).map((key) => {
              if (key !== "designation") {
                return (
                  <TextField
                    key={key}
                    className={classes.editTextField}
                    variant="outlined"
                    disabled
                    id={key}
                    label={key.toUpperCase()}
                    defaultValue={
                      key === "id" ? "EMPK-" + user[key] : user[key]
                    }
                  />
                );
              } else {
                return (
                  <TextField
                    key={key}
                    className={classes.editTextField}
                    variant="outlined"
                    id={key}
                    label={key.toUpperCase()}
                    defaultValue={user[key]}
                    onChange={handleDesignationChange}
                  />
                );
              }
            })}
            <div className={classes.editBtnsDiv}>
              <Button
                variant="contained"
                color="primary"
                style={{ margin: "10px" }}
                onClick={handleSaveClick}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ margin: "10px" }}
                onClick={handleDeleteClick}
              >
                Delete
              </Button>
            </div>
          </Box>
        </>
      ) : (
        <div className={classes.div}>
          <Avatar className={classes.avatar} alt={user.name}>
            {user.name[0]}
          </Avatar>
          <Typography className={classes.typography}> {user.name}</Typography>
          <Typography className={classes.typography}>
            {user.designation}
          </Typography>
          <Typography className={classes.typography}>
            Bonus Stars : {user.bonusStars}
          </Typography>
          <Typography>
            <div className={classes.span_container}>
              <span className={classes.span_content}>
                <span className={classes.spanDay}>Employee of The Day</span> :{" "}
                {user.empOfDayCount}
              </span>
              <span className={classes.span_content}>
                <span className={classes.spanWeek}>Employee of The Week</span> :{" "}
                {user.empOfWeekCount}
              </span>
              <span className={classes.span_content}>
                <span className={classes.spanMonth}>Employee of The Month</span>{" "}
                : {user.empOfMonthCount}
              </span>
            </div>
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Profile;
