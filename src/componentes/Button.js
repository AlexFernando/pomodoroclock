import React, { Component } from 'react';


class Button extends Component {
    state = {  }
    render() { 
        return ( 
            <button>
                {this.props.children}
            </button>
         );
    }
}
 
export default Button;