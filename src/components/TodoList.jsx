import React, { Component} from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) =>
                    <Todo {...todo}
                          key={index}
                          onClick={() => this.props.onTodoClick(index)} />
                )}
            </ul>
        )
    }
}