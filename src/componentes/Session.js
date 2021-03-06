import React, { Component } from 'react'
import './Session.css'

class Session extends Component {
    state = {  }
    render() { 
        
        if(this.props.changeBreak === true) {
            return(
                <div>
                    <p className="title-time" >Break: <span>5 min</span></p>
                    <p className="time">{this.props.minutesSession} : {this.props.seconds}</p>
                </div>
            )
        } 

        return ( 
        <div>
            <p className="title-time">Sesion: <span>25 min</span></p>
            <p className="time">{this.props.minutesSession} : {this.props.seconds}</p>
        </div> 
        );
    }
}
 
export default Session;