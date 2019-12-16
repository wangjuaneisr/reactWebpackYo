import React from 'react';

let Input = React.createClass({
    render(){
        return (
            
           <p>{this.props.str} <input type={this.props.type} name={this.props.n} value={this.props.v}/></p>
            
            )
    },
    
})

module.exports = Input;