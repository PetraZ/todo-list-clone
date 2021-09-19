import React, { Component } from 'react'

import TodoItem from '../TodoItem'

export default class TodoList extends Component {

    render() {
        const {updateTask, deleteTask} = this.props
        return (
            <div className='todo-list'>
                {
                    this.props.items.map((item) => {
                        return (
                            <TodoItem key={item.id} id={item.id} name={item.name} isDone={item.isDone} updateTask={updateTask} deleteTask={deleteTask}/>
                        )
                    })
                }
            </div>
        )
    }
}
