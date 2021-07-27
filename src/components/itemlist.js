import React from 'react';

import CVItem from './cvitem';


const ItemList = (props) => {
         const itemsDB = props.DB1.map((row) => (
                  <CVItem row={row} key={row.id}/>
                  
         ))

         return(
                  <>
                           <div>Welcome to the Items of the CV</div>
                           { itemsDB }
                  </>
         )
}

export default ItemList;
