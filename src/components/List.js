import React from 'react';
let users = [
    {"name":"曹操","age":19},
    {"name":"张飞","age":12},
    {"name":"项羽","age":19}
]
let List = React.createClass({
    render:()=>{
        return (
            <ul>
                {
                    users.map((item,index) => {
                        return <li key={index}>{item.name}</li>
                    })
                }
            </ul>
        )
    },
    
    
})

module.exports = List;