import React from 'react';

let Hello2 = React.createClass({
    getDefaultProps:function(){
        return {title:'默认标题'}
    },
    render(){
        return (
            
            <h1>JSX需要渲染的内容： <em>{this.props.title}</em></h1>
            
            )
    },
    
})

module.exports = Hello2;