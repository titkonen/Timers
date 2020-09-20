import React from "react";
import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// Material Design imports
import { makeStyles } from '@material-ui/core/styles';
import { Button, AppBar, Toolbar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Stopwatch</Link>
              </li>
              <li>
                <Link to="/users">Countdown</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

      </div>
    </Router>
  );
}

function Home() {
  const classes = useStyles();

  return (
  <div className="App">
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Timers
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
    <div className="App-title">Welcome to Timers</div>
    <h2>Choose your mode</h2>
    <Link to="/about">
      <Button variant="contained" color="primary">
        Stopwatch
      </Button>
    </Link>
    <Link to="/users">
      <Button variant="contained" color="primary">
        Countdown
      </Button>
    </Link>
    
  </div>
  
  
  );
}

function About() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Stopwatch
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      {/* <div className="App-title">Stopwatch</div> */}
      <div className="Timers">
        <Stopwatch />
      </div>
    </div>
  );
}

function Users() {
  return (
    <div className="App">
      <div className="App-title">Countdown</div>
      <div className="Timers">
        <Countdown />
      </div>
    </div>
  );
}
 
