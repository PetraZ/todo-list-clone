
import React, {Component} from 'react'

export default class ItemAdditionBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            term: ""
        }
        this.addTask = props.createTask
    }


    onFormSubmit = (event) => {
        event.preventDefault()

        this.addTask(this.state.term)
        this.setState({
            term: ""
        })
    }

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }

    render(){
        return (
            <form className='item-addition-bar' onSubmit={this.onFormSubmit} >
                <input
                    style={{width: '200px'}}
                    type='text'
                    placeholder="Please input your task name."
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
            </form>
        )
    }
}
