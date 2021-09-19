import React, { Component } from 'react'
import './index.css'

export default class TodoSummary extends Component {
    render() {
        const {tasks, deleteFinishedTasks} = this.props
        let finishedCount = 0
        tasks.forEach(element => {
            if(element.isDone) {
                finishedCount += 1
            }
        });
        return (
            <div className='todo-summary'>
                <span>{`Finished(${finishedCount}) / All(${tasks.length})`}</span>
                <button onClick={deleteFinishedTasks}>Delete Finished</button>
            </div>
        )
    }
}
