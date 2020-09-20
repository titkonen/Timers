import React, { Component } from "react";
import "./App.css";
import Button from '@material-ui/core/Button';

class Stopwatch extends Component {
   state = {
      timerOn: false,
      timerStart: 0,
      timerTime: 0
    };

    startTimer = () => {
      this.setState({
        timerOn: true,
        timerTime: this.state.timerTime,
        timerStart: Date.now() - this.state.timerTime
      });
      this.timer = setInterval(() => {
        this.setState({
          timerTime: Date.now() - this.state.timerStart
        });
      }, 10);
    };

    stopTimer = () => {
      this.setState({ timerOn: false });
      clearInterval(this.timer);
    };

    resetTimer = () => {
      this.setState({
        timerStart: 0,
        timerTime: 0
      });
    };

  render() {

   const { timerTime } = this.state;
   let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
   let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
   let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
   let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);



    return (
      <div className="Stopwatch">
        <div className="Stopwatch-header">Stopwatch</div>

        <div className="Stopwatch-display">
         {hours} : {minutes} : {seconds} : {centiseconds}
        </div>

         {this.state.timerOn === false && this.state.timerTime === 0 && (
           <Button 
            onClick={this.startTimer}
            variant="contained"
            color="primary">
              Start
            </Button>
         )}
         {this.state.timerOn === true && (
           <Button 
            onClick={this.stopTimer}
            variant="contained"
            color="primary">
             Stop
           </Button>
            // <button onClick={this.stopTimer}>Stop</button>
         )}
         {this.state.timerOn === false && this.state.timerTime > 0 && (
            <Button 
              onClick={this.startTimer}
              variant="contained"
              color="primary">
             Resume
           </Button>
            // <button onClick={this.startTimer}>Resume</button>
         )}
         {this.state.timerOn === false && this.state.timerTime > 0 && (
          <Button 
            onClick={this.resetTimer}
            variant="contained"
            color="secondary">
           Reset
          </Button>
            // <button onClick={this.resetTimer}>Reset</button>
         )}



      </div>
    );
  }
}

export default Stopwatch;