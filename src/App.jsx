
import React, {Component} from 'react'

import ItemAdditionBar from './components/ItemAdditionBar'
import TodoList from './components/TodoList'
import TodoSummary from './components/TodoSummary'

export default class App extends Component {
    render() {
    return (
        <div>
            <ItemAdditionBar/>
            <TodoList/>
            <TodoSummary/>
        </div>
        )
    }
}

