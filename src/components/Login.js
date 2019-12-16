import React from 'react';
import Input from './Input'
let Login = React.createClass({
    getDefaultProps:function(){
        return {title:'默认标题'}
    },
    render(){
        return (
            
            <form>
                <h1>会员登录</h1>
                <Input type='text' n='usename' str="用户名"/>
                <Input type='text' n='password' str="密码"/>
                <Input type='button' v='登陆' />
            </form>
            
            )
    },
    
})

module.exports = Login;