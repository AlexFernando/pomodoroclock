import React, { Component } from 'react'

class Session extends Component {
    state = {  }
    render() { 
        
        if(this.props.changeBreak === true) {
            return(
                <div>

            <p>Break 5min</p>
                    <p>{this.props.minutesSession}</p>
                    <p>{this.props.seconds}</p>
                </div>
            )
        } 

        return ( 
        <div>
            <p>Sesion 25min</p>
            <p>{this.props.minutesSession}</p>
            <p>{this.props.seconds}</p>
        </div> 
        );
    }
}
 
export default Session;