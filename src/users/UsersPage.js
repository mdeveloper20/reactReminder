import React, { Component } from 'react';
import './users.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {users} from './Data';

class UsersPage extends Component {

    state={users: users}

    onDragEnd = result => {
        const { destination, source, reason } = result;
        // Not a thing to do...
        if (!destination || reason === 'CANCEL') {
          return;
        }
    
        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          return;
        }
    
        const users = Object.assign([], this.state.users);
        const droppedUser = this.state.users[source.index];


        users.splice(source.index, 1);
        users.splice(destination.index, 0, droppedUser);
        this.setState({
          users
        });
      }
   
    renderUsers = (item, index) => {
        return <Draggable
            key={index}
            draggableId={index+' '}
            index={index}>

            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className='item'>
                        <div>{index+1}</div>
                        <div><img src={item.avatar} alt='avatar' /></div>
                        <div className='name'>
                            <div>{item.firstName}</div>
                            <div>{item.lastName}</div>
                        </div>

                    </div>
                </div>
            )}



        </Draggable>
    }
    render() {
        
        return (<DragDropContext onDragEnd={this.onDragEnd}>
            <div className='container'>
                <div className='users'>
                    <h1>Users</h1>

                    <Droppable droppableId="dp1">
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                {this.state.users.map(this.renderUsers)}
                                {provided.placeholder}
                            </div>
                        )}

                    </Droppable>

                    
                </div>
                
            </div>
        </DragDropContext>);
    }
}

export default UsersPage;