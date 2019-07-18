import React, { Component } from 'react';
import Session from './componentes/Session';
import Button from './componentes/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlay, faWheelchair } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';


class App extends Component {
  state = { 
    minutesSession : 2,
    seconds : 0,
    minutesBreak : 5,
    changeBrake : false
  }

  setOriginalTime = () => {
    this.setState({
      minutesSession : 25,
      seconds : 0,
    })
  }


  countdown = () => {

      if(this.state.minutesSession === 0 && this.state.seconds === 0 && !this.state.changeBreak){

        console.log('Hola cuando 0 y 0')
        this.setState({
          minutesSession : 1,
          seconds : 0,
        })
        //clearInterval(this.myInterval)
        console.log('antes del audio')
        let audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3');
        audio.play();
        this.setState({
          changeBreak: true
        })
      }

      if(this.state.minutesSession === 0 && this.state.seconds === 0 && this.state.changeBreak){
        console.log('Hola cuando HAY BREAK')
        console.log('antes del audio')
        let audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3');
        audio.play();
        
        this.setState({
          
          minutesSession : 2,
          seconds : 0,
          changeBreak: false
        })
      }


      this.minutesRemaining = this.state.minutesSession;
    console.log("hola")
      
      if(this.state.seconds === 0) {
        console.log("hola 1")
        this.setState({
          minutesSession : this.minutesRemaining - 1,
          seconds : 10,
        })
      }

      this.secondsRemaining = this.state.seconds;
  
      this.secondsRemaining--
  
      this.setState({
        seconds: this.secondsRemaining
      })

  }

  reloadCountdown = () => {

    this.setState({
      minutesSession : 25,
      seconds : 0,
      minutesBreak : 5
    })

    clearInterval(this.myInterval)
  }
 
  startCountdown = () => {
    console.log("Hola");
      this.myInterval = setInterval(this.countdown, 1000);    
  }

  stopCountDown = () => {
    clearInterval(this.myInterval);
  }

  render() { 
    return ( 
    <div>
        Pomodoro Clock
        <Session 
          minutesSession = {this.state.minutesSession}
          seconds = {this.state.seconds}
          changeBreak = {this.state.changeBreak}
        />

        <div>
          <Button>
            <FontAwesomeIcon icon={faPlay} onClick = {this.startCountdown} ></FontAwesomeIcon>
          </Button>
          <Button>
            <FontAwesomeIcon icon={faPause} onClick = {this.stopCountDown} ></FontAwesomeIcon>
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