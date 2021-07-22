import React, { Component } from 'react';

class Item extends Component{
    
    getYear() {
        var date = new Date();
        return date.getFullYear();
    }

    // getInputHandler(event) {
    //     console.log(event.target.value);
    // }

    functionCallingfunction = (event) => {
        this.getInputHandler(event);
        console.log('Function call successful');

    }

    getInputHandler(event) {
        console.log(event.target.value);
    }

    render(){
        return (
            <h4
                onClick = {   () => console.log('I was clicked')    }
            >
                <div className="lastupdated">
                    <h5>Last Updated in the Year  {this.getYear()}</h5>
                </div>
                {/* <input onChange= {this.getInputHandler} />  */}
                {/* <input onChange= {(eve) => this.getInputHandler(eve,'sezal')} /> */}
                <input onChange= {this.functionCallingfunction} />
            </h4>
        );
    }
}

export default Item;


//<input onChange= { () => console.log('blah')} / >