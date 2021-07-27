import React, { Component } from 'react';


class Header extends Component{
    getYear() {
        var date = new Date();
        return date.getFullYear();
    }
    render(){        
        return (
            <>
                <header className="header">
                    <h1>Sezal Chug</h1>
                    <h2>Resume/CV</h2>
                    <h5>Last Updated in the Year {this.getYear()}</h5>
                </header>
            </>
        );
    }
}

export default Header;