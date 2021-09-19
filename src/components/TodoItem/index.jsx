import React, { Component } from 'react'

import './index.css'

export default class TodoItem extends Component {


    render() {
        const {id, name, isDone} = this.props
        const {updateTask, deleteTask} = this.props
        return (
            <div className={`todo-item ${isDone? 'isDone':""}`} key={id}>
                <input type="checkbox" name={name} defaultChecked={isDone} onClick={() => {updateTask(id)}}></input>
                <label>{name}</label>
                <button className='todo-item__delete_button' onClick={()=>{deleteTask(id)}}> Delete</button>
            </div>
        )
    }
}
