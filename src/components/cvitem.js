import React from 'react';

//We learn about transfering a attribute from one class component to functional component

// the props here can have multiple attributes.
//ex: <CVItem row = {row} key={row.id} name="sezal" age="22" address="srftrgR"/> etc.. 
//hence instead of receiving all props and its properties.. we just recieve the one we want.
//const CVItem = (props) => {
//     return(
//         <div>
//             <h3>{props.row.id}. {props.row.title}</h3>
//             <div>{props.row.feed}</div>
//         </div>
//     )
// }
const CVItem = ({row}) => {
    return(
        <div className="cvItem">
            <h3>{row.id}. {row.title}</h3>
            <div>{row.feed}</div>
        </div>
    )
}

export default CVItem;


