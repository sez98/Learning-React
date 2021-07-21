import React, { Component } from 'react';

class Item extends Component{
    
    getYear() {
        var date = new Date();
        return date.getFullYear();
    }

    // getInputHandler(event) {
    //     console.log(event.target.value);
    // }

    getInputHandler(event, name) {
        console.log(event.target.value);
        console.log(name);
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
                <input onChange= {(eve) => this.getInputHandler(eve,'sezal')} />
            </h4>
        );
    }
}

export default Item;


//<input onChange= { () => console.log('blah')} / >