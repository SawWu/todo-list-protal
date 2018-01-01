import React, { Component } from 'react';

export default class Item extends Component{

    constructor(prop){
        super(prop);

    }
    render(){
        console.log(this.props);
        return (
            <div>
                <h2 className="title">{this.props.data.name}</h2>
            </div>
        )
    }
}