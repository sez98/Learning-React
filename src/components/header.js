import React from 'react';

const Header = (props) => {
    

    return (
        <>
            <header className="header">
                <h1>Sezal Chug</h1>
                <h2>Resume/CV</h2>
            </header>
            
{/* Filter Input Box */}
            <div>
                Filter Box- 
                <input onChange= {props.inputfunctionCall}/>
            </div>
        </>
    );
}

export default Header;