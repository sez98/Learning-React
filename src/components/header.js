import React, { Component } from 'react';


class Header extends Component{

    state= {
        active: false
    }

    getYear() {
        var date = new Date();
        return date.getFullYear();
    }
    render(){        
        return (
            <>
                <header className="header" style= {{background: `${this.state.active ? 'red' : 'green'}`}}>
                    <h1>Sezal Chug</h1>
                    <h2>Resume/CV</h2>
                    <h5>Last Updated in the Year {this.getYear()}</h5>
                </header>
                
            </>
        );
    }
}

export default Header;