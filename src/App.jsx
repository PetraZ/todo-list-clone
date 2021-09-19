
import React, {Component} from 'react'
import { nanoid } from 'nanoid'

import ItemAdditionBar from './components/ItemAdditionBar'
import TodoList from './components/TodoList'
import TodoSummary from './components/TodoSummary'


import "./App.css"

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [
                {id: nanoid(), name: "work", isDone: false},
                {id: nanoid(), name: "watch react videos", isDone: false},
            ]
        }
    }

    createTask = (name) => {
        if(name === "") {
            alert("cannot create an empty task")
            return
        }
        this.setState(
            {items: [...this.state.items, {id:nanoid(), name:name, isDone:false}]}
        )
    }

    deleteTask = (id) => {
        const {items} = this.state

        const newItems = items.filter((item) => {
            return item.id !== id
        })
        this.setState({items: newItems})
    }

    deleteFinishedTasks = () => {
        const {items} = this.state

        const newItems = items.filter((item) => {
            return !item.isDone
        })

        this.setState({items: newItems})
    }

    updateTask = (id) => {
        const {items} = this.state

        const newItems = items.map((item) => {
            if (item.id === id) {
                item.isDone = !item.isDone
                return item
            }
            else {return item}
        })

        this.setState({items: newItems})
    }


    render() {
        return (
            <div className="app">
                <div >To Do List</div>
                <ItemAdditionBar createTask={this.createTask}/>
                <TodoList items={this.state.items} deleteTask={this.deleteTask} updateTask={this.updateTask}/>
                <TodoSummary tasks={this.state.items} deleteFinishedTasks={this.deleteFinishedTasks}/>
            </div>
            )
    }
}

