import React, { Component } from 'react';

import Header from './components/header';
import Footer from './components/footer'
import ItemList from './components/itemlist';
import DB from './db.json';

import './styles/App.css';

//data can be passed between components back and forth using props
class App extends Component {

  state = {
    DB1: DB,
    FilteredDB1: DB,
    Author: "Sezal Chug",
    keywords: ''
  }

  inputHandler= (event) => {
    let words = event.target.value;
    let filtered = this.state.DB1.filter((item) => {
      return item.title.indexOf(words) > -1;
    });

    // console.log(filtered);
    this.setState({
      FilteredDB1: filtered
    })
  }


  render() {
    return (
      <>
        <div className="welcomenote">
          <h1>Welcome to the First Webpage!</h1>
        </div>
        <Header inputfunctionCall= {this.inputHandler}/>
        <ItemList DB1= {this.state.FilteredDB1}> 
          News List 
        </ItemList>
        <Footer Author= {this.state.Author}
        />
      </>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
