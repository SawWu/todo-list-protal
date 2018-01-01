import React, { Component} from 'react'

export default class AddTodo extends Component {
    constructor(props){
        super(props)
    }
    handleClick() {
        const node = this.refs.input;
        const text = node.value.trim();
        if(text ==''){
            return ;
        }
        this.props.onAddClick(text);
        node.value = ''
    }
    render() {
        return (
            <div>
                <input type='text' ref='input' />
                <button onClick={() => this.handleClick()}>
                    Add
                </button>
            </div>
        )
    }
}

