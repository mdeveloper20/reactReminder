import React, { Component } from 'react';
import './users.css';

const users=[
    {id:1, firstName: 'Alison', lastName:'Burger',avatar:'https://i.picsum.photos/id/328/200/300.jpg'},
    {id:9, firstName: 'Michael', lastName:'Cooley',avatar:'https://i.picsum.photos/id/323/200/300.jpg'},
    {id:5, firstName: 'Selena', lastName:'Brown',avatar:'https://i.picsum.photos/id/342/200/300.jpg'},
    {id:7, firstName: 'Sara', lastName:'Brock',avatar:'https://i.picsum.photos/id/325/200/300.jpg'},
]
const topUsers=[
    {id:8, firstName: 'Manha', lastName:'Marks',avatar:'https://i.picsum.photos/id/428/200/300.jpg'},
    {id:3, firstName: 'Brook', lastName:'Jimenez',avatar:'https://i.picsum.photos/id/425/200/300.jpg'},
]
class UsersPage extends Component {
    state = {  }

    renderUsers=(item)=>{
        return <div>
            <div>{item.id}</div>
            <div><img src={item.avatar} alt='avatar'/></div>
            <div>
                <div>{item.firstName}</div>
                <div>{item.lastName}</div>
            </div>

        </div>
    }
    render() { 
        return ( <div className='container'>
            <div className='users'>
                <h1>Users</h1>

                {users.map(this.renderUsers)}
            </div>
            <div className='top users'>
                <h1>Top Users</h1>

                {topUsers.map(this.renderUsers)}
            </div>
        </div> );
    }
}
 
export default UsersPage;