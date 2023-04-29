import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TableSortLabel from "@material-ui/core/TableSortLabel";

import useStyles from "./styles";
import axios from "axios";

const Task = (props) => {
  const classes = useStyles();
  const id = props.match.params.id;
  const [data, setData] = useState([]);
  const [rowData, setRowData] = useState(data);
  const [orderDirection, setOrderDirection] = useState("asc");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1.0/employees/${id}/tasks`)
      .then((response) => {
        setData(response.data.tasks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  return (
    <TableContainer component={Paper} className={classes.paper}>
      {data.length > 0 ? (
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>TaskId</TableCell>
              <TableCell align="right"> Summary</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">AssignedOn</TableCell>
              <TableCell align="right">Deadline</TableCell>
              <TableCell align="right">CompletedOn</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <a href="#">{row.id}</a>
                </TableCell>
                <TableCell align="right">{row.summary}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.date_assigned}</TableCell>
                <TableCell align="right">{row.deadline}</TableCell>
                <TableCell align="right">{row.date_completed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Typography className={classes.typography}  variant="h2">
          No Data found
        </Typography>
      )}
    </TableContainer>
  );
};

export default Task;
