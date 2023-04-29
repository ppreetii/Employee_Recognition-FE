import React, { useState, useEffect } from "react";
import { Typography, Avatar } from "@material-ui/core";
import useStyles from "./styles";
import axios from "axios";

const Profile = (props) => {
  const classes = useStyles();
  const id = props.match.params.id;
  const [user, setUser] = useState({
    id: "id",
    name: "name",
    designation: "designation",
    bonusStars: 0,
    employee_of_the_day: 0,
    employee_of_the_week: 0,
    employee_of_the_month: 0,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1.0/employees/${id}`)
      .then((response) => {
        setUser(response.data);
      }).catch(err =>{
        console.log(err)
      })
  }, [user]);

  return (
    <div className={classes.div}>
      <Avatar className={classes.avatar} alt={user.name}>
        {user.name[0]}
      </Avatar>
      <Typography className={classes.typography}> {user.name}</Typography>

      <Typography className={classes.typography}>{user.designation}</Typography>
      <Typography className={classes.typography}>
        <hr className={classes.hr} />
        Bonus Stars : {user.bonusStars}
      </Typography>
      <Typography>
        <div className={classes.span_container}>
          <span className={classes.span_content}>
            <span className={classes.spanDay}>Employee of The Day</span> :{" "}
            {user.employee_of_the_day}
          </span>
          <span className={classes.span_content}>
            <span className={classes.spanWeek}>Employee of The Week</span> :{" "}
            {user.employee_of_the_week}
          </span>
          <span className={classes.span_content}>
            <span className={classes.spanMonth}>Employee of The Month</span> :{" "}
            {user.employee_of_the_month}
          </span>
        </div>
      </Typography>
    </div>
  );
};

export default Profile;
