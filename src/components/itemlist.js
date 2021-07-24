import React from 'react';

const ItemList = (props) => {
         const itemsDB = props.DB1.map((row) => {
                  return(
                           <div key={row.id}>
                                    <h3>{row.id}. {row.title}</h3>
                                    <div>{row.feed}</div>
                           </div>
                  )
         })

         return(
                  <>
                           <div>Welcome to the Items of the CV</div>
                           {itemsDB}
                  </>
         )
}

export default ItemList;
