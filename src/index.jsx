import React, { Component } from 'react';
import { render } from 'react-dom';
import Item from './component/Item'
import dataList from './data/data';
import './less/style';

class App extends Component{
    setShow(){
        let list=Object.keys(dataList).map((val,index)=>{
            return <Item key={index} data={dataList[val]}/>
        });
        return list;
    }
    render() {
        return (
            <div className="panel">
                {
                    this.setShow()
                }
            </div>
        )
    }
};


render(
    <App/>,
    document.querySelector('#root')
);