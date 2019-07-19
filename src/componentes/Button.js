import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    state = {  }
    render() { 
        return ( 
            <button className="button-player">
                {this.props.children}
            </button>
         );
    }
}
 
export default Button;