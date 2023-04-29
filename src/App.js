import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Reward from "./components/Reward/Reward";
import Profile from "./components/Profile/Profile";
import Task from "./components/Task/Task"
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg" className="container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reward" exact component={Reward} />
          <Route path="/tasks/:id" exact component={Task} />
          <Route path="/profile/:id" exact component={Profile} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;