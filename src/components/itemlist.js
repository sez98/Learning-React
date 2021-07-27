import React from 'react';

import CVItem from './cvitem';


const ItemList = (props) => {
         const itemsDB = props.DB1.map((row) => (
                  <CVItem row={row} key={row.id}/>
                  
         ))

         return(
                  <>
                           <div>Welcome to the Items of the CV</div>
                           <h2>{props.children}</h2>
                           { itemsDB }
                           
                  </>
         )
}

export default ItemList;
