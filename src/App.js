import React, { Component } from 'react';
import Session from './componentes/Session';
import Button from './componentes/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlay, faWheelchair } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import logo from './img/alpaca.png';
import './App.css'

class App extends Component {
  state = { 
    minutesSession : 25,
    seconds : "00",
    changeBrake : false
  }

  setOriginalTime = () => {
    this.setState({
      minutesSession : 25,
      seconds : "00",
    })
  }


  countdown = () => {

      if(this.state.minutesSession === "00" && this.state.seconds === "01" && !this.state.changeBreak){
        this.stopCountDown()

        let audio = new Audio('https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg');

        audio.play();

        setTimeout(() => {
          this.setState({
            minutesSession : 5,
            seconds : "00",
            changeBreak: true
          })
          this.startCountdown()
        }, 7000);   
      }
    

      if(this.state.minutesSession === "00" && this.state.seconds === "01" && this.state.changeBreak){
        this.stopCountDown();
         
        let audio = new Audio('https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg');
        
        audio.play();

        setTimeout(() => {
          this.setState({       
            minutesSession : 25,
            seconds : "00",
            changeBreak: false
          })
          this.startCountdown();

        }, 7000);

        }
        
      this.minutesRemaining = this.state.minutesSession;
    
      if(this.state.minutesSession > 0 && this.state.seconds === "00") {
        this.setState({
          minutesSession : this.minutesRemaining - 1,
          seconds : 60,
        })

        if(this.state.minutesSession < 10) { 
          this.setState({
            minutesSession: "0"+ this.state.minutesSession
          })
        }
      }


      this.secondsRemaining = this.state.seconds;
  
      this.secondsRemaining--

      this.setState({
        seconds: this.secondsRemaining
      })

      if(this.secondsRemaining < 10) { 
        this.setState({
          seconds: "0"+ this.secondsRemaining
        })
      }
  }

  reloadCountdown = () => {

    this.setState({
      minutesSession : 25,
      seconds : "00",
      minutesBreak : 5
    })

    clearInterval(this.myInterval)
  }
 
  startCountdown = () => {
      this.myInterval = setInterval(this.countdown, 1000);    
  }

  stopCountDown = () => {
    clearInterval(this.myInterval);
  }

  render() { 
    return ( 
    <div className="container">
        <h1 className="title">The Alpaca Pomodoro Clock</h1>

        <div>
          <img  className="image" src={logo}  alt="Logo" />
        </div>

        <h2 className="subtitle">Be productive!</h2>

        <Session 
          minutesSession = {this.state.minutesSession}
          seconds = {this.state.seconds}
          changeBreak = {this.state.changeBreak}
        />

        <div>
          <Button>
            <FontAwesomeIcon icon={faPlay} onClick = {this.startCountdown}></FontAwesomeIcon>
          </Button>
          <Button>
            <FontAwesomeIcon icon={faPause} onClick = {this.stopCountDown}></FontAwesomeIcon>
          </Button>
          <Button>
            <FontAwesomeIcon icon={faRedoAlt} onClick = {this.reloadCountdown}></FontAwesomeIcon>
          </Button>
        </div>
        
    </div> 
    );
  }
  
  
}
 
export default App;