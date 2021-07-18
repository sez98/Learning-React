import React, { Component } from 'react';

import Item from './cvitem';

// function getYear() {
//     var date = new Date();
//     return date.getFullYear();
// }

class Header extends Component{
    render(){
        return (
            <>
                <div className="header">
                    <h1>Sezal Chug</h1>
                    <h2>Resume/CV</h2>
                    {/* <h5>Last Updated in the Year {getYear()}</h5> */}
                </div>
                <Item />
            </>
        );
    }
}

export default Header;