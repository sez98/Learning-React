import React, { Component } from 'react';


class Footer extends Component{

    render(){        
        return (
            <>
                <footer>
                    <h2>This is the Footer</h2>
                    <h3>The author of the Website is {this.props.author}</h3>
                </footer>
            </>
        );
    }
}

export default Footer; 