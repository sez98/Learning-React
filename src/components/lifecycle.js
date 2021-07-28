import React, { Component } from 'react';


class Lifecycle extends Component{

//Constructor is the first thing that starts in a class based component
//if we override the constuctor by creating one manually, then we need to use this.state to override state as well. 
         constructor() {
                  super();

                  this.state = {
                           action: '',
                           name: 'Sezal Chug'
                  }
                  console.log('1. Constructor');
         }

         static getDerivedStateFromProps(props,state){
                  console.log('2. derived state')
                  console.log('current', state)
                  return null;
         }

         //method is fired when everything is ready to be mounted
         componentDidMount(){
                  console.log('4. ComponentDidMount')
         }
          
         //removing or unmounting the component from the DOM
         componentWillUnmount(){
                  console.log('5. ComponentWillUnmount')
         }

         shouldComponentUpdate(nextProps, nextState){
                  console.log('6. shouldComponentUpdate')
                  console.log('next',nextState)
                  console.log('current',this.state)
                  if(this.state.name === 'Sezal'){
                           return false;
                  }
                  return true;
         }

         getSnapshotBeforeUpdate(prevProps, prevState){
                  console.log('8. getSnapshotBeforeUpdate')
                  console.log('previous', prevState)
                  console.log('current',this.state)
                  let tempVar = '2021'
                  return tempVar;
         }

         componentDidUpdate(prevProps, prevState, snapshot){
                  console.log('7. componentDidUpdate')
                  console.log('previous', prevState)
                  console.log('current',this.state)
                  console.log('Getting value from the snapshot', snapshot)
         }

         render(){     
                  console.log('3. Render is ready')   
                  return (
                           <>
                                    <div>{this.state.name}</div>
                                    <div>LIFECYCLE</div>
                                    <button
                                             onClick = {() => this.setState({name: 'Naman Chug'})}
                                    >Change State's Name</button>
                           </>
                  );
         }
}

export default Lifecycle; 