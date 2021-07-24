import React, { Component } from 'react';

// state is a variable/object of class having some keywords like boolean/ var or anything
class Item extends Component{
    
    getYear() {
        var date = new Date();
        return date.getFullYear();
    }

    state = {
        title: 'Name entered by the user is',
        input: '',
        count: 0
    }

    getInputHandler = (event) => {
        this.setState({
            input: event.target.value
        })
        //this.state.input = event.target.value
        //never directly do this cuz the DOM doesnt know this and react isnt incharge of this change
        //late app might run into some errors cuz they wont be able to understand where it coming from
    }

    changeState() {
        // this.setState({
        //     count: this.state.count + 1
        // })
        //Below method is better cuz in this we are not accessing two calls to the same state in the same line.
        //we are making use of a call back function which saves the values of state when we once make a call. 
        // here 'a'/'state' is just a variable, can be named anything
        this.setState( (a) => ({
            count: a.count + 1
        }))
        console.log("I was submitted");
        console.log(this.state.count);

    }

    render(){
        console.log(this.state)
        return (
            <h4>
                <div className="lastupdated">
                    <h5>Last Updated in the Year  {this.getYear()}</h5>
                </div>
                <input onChange= {this.getInputHandler} />
                <div>
                    {this.state.title} - {this.state.input} has been submitted {this.state.count} times. 
                </div>

                <div>
                    <button onClick = {   () => this.changeState()    }>Submit</button>
                </div>
            
            </h4>
        );
        
    }
}

export default Item;


//<input onChange= { () => console.log('blah')} / >