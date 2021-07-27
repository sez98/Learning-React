import React, { Component } from 'react';


class Header extends Component{

    state= {
        active: false,
        keywords: '',
        classname: 'header'
    }

    getYear() {
        var date = new Date();
        return date.getFullYear();
    }

    inputHandler= (event) => {
        // const value = event.target.value === '' ? false : true;
        const value = event.target.value === '' ? 'header' : 'filledHeader';

        this.setState({
            active: value,
            keywords: event.target.value,
            classname: value
        })
    }

    printValue() {
        console.log(this.state.keywords);
    }


    render(){        
        return (
            <>
                {/* <header className="header" style= {{background: `${this.state.active ? 'yellow' : 'green'}`}}> */}
                <header className={this.state.classname}>
                    <h1>Sezal Chug</h1>
                    <h2>Resume/CV</h2>
                    <h5>Last Updated in the Year {this.getYear()}</h5>
                </header>
                <input onChange= {this.inputHandler}/>
                <div><button onClick= {() => this.printValue()}> SUBMIT </button></div>
            </>
        );
    }
}

export default Header;