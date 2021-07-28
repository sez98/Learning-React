import React, { useState} from 'react';


const Hooks = ({initialCount, DB1}) => {
         // const [count , setCount] = useState(initialCount)

         // const addOne = () => {
         //          setCount(count +1 )
         // }

         // const deleteOne = () => {
         //          setCount(count-1)
         // }

         // const reset = () => {
         //          setCount(initialCount)
         // }

//Setting multiple values in a state in funcitonal component
         const [state, setState] = useState({
                  count: initialCount,
                  user: 'Sezal Chug'
         })

         const addOne = () => {
                  setState({
                           ...state,
                           count: state.count + 1
                  })
         }

         const deleteOne = () => {
                  setState({
                           ...state,
                           count: state.count - 1
                  })
         }

         const reset = () => {
                  setState({
                           ...state,
                           count: initialCount
                  })
         }

//Showing the DB using a fucntional component and passing it through Props
         let [posts,setPosts] = useState(DB1)
              

              
         const addPost = () => {
                  let newPost = {
                           id: 'New',
                           title:'Empty',
                           guide: 'Sezalchug',
                           feed:'something about NEW'
                  }
              
                  setPosts([
                           ...posts,
                           newPost
                  ]);
         }

         return(
                  <>
                           <div>Hooks Example: Using state in functional component</div>
                           <div>User: {state.user}</div>
                           <div> Count Value: {state.count}</div>
                           <button onClick = {addOne} >
                                    Add One
                           </button>

                           <button onClick = {deleteOne} >
                                    Delete One
                           </button>

                           <button onClick = {reset}>
                                    RESET
                           </button>


                           {posts.map((row,i)=>(
                                    <div className="cvItem" key={i}>
                                             <h3>{row.id}. {row.title}</h3>
                                             <h4>Guide: {row.guide}</h4>
                                             <div>{row.feed}</div>
                                    </div>
                           ))}
                           <button onClick = {addPost}>
                                    Add More Posts
                           </button>
                  </>
         )
}

export default Hooks;