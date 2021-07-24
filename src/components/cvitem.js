import React, { Component } from 'react';

class Item extends Component{
    

    state = {
        keywords: ''
    }

    getInputHandler = (event) => {
        this.setState({
            input: event.target.value
        })
    }


    render(){
        
        return (
            <h4>
                <input onChange= {this.getInputHandler} />            
            </h4>
        );
        
    }
}

export default Item;


