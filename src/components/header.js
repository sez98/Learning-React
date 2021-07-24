import React, { Component } from 'react';


class Header extends Component{
    getYear() {
        var date = new Date();
        return date.getFullYear();
    }
    render(){        
        return (
            <>
                <div className="header">
                    <h1>Sezal Chug</h1>
                    <h2>Resume/CV</h2>
                    <h5>Last Updated in the Year {this.getYear()}</h5>
                </div>
            </>
        );
    }
}

export default Header;