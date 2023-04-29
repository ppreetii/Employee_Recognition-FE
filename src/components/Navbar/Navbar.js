import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Button, Avatar } from "@material-ui/core";
import useStyles from "./styles";
import logo from "../../../src/images/company_logo.png";
import { Link, useHistory, useLocation } from "react-router-dom";

const Navbar = ({ user }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="fixed" color="inherit">
      <div className={classes.brandContainer}>
        <Toolbar className={classes.toolbar}>
          <Typography component={Link} to="/">
            <img
              className={classes.image}
              src={logo}
              alt="company logo"
              height="60"
            />
          </Typography>
          <div className={classes.menu}>
            <Typography
              component={Link}
              to="/profile/:id"
              className={classes.menuOption}
              variant="h5"
            >
              Profile
            </Typography>
            <Typography
              component={Link}
              to="/tasks/:id"
              className={classes.menuOption}
              variant="h5"
            >
              Task
            </Typography>
            <Typography
              component={Link}
              to="/reward"
              className={classes.menuOption}
              variant="h5"
            >
              Reward
            </Typography>
          </div>
        </Toolbar>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              //   onClick={logout}
            >
              Log Out
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
