import React, { Component } from 'react';

class Item extends Component{
  render(){
      return (
          <>
              <div className="lastupdated">
                  <h5>Last Updated in the Year </h5>
              </div>
          </>
      );
  }
}

export default Item;


// const getYear() { {getYear()}
//          var date = new Date();
//          return date.getFullYear();
//        }