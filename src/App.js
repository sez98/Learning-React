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
    Author: "Sezal Chug"
  }

  render() {
    return (
      <>
        <div className="welcomenote">
          <h1>Welcome to the First Webpage!</h1>
        </div>
        <Header />
        <ItemList
          DB1= {this.state.DB1}
        />
        <Footer Author= {this.state.author}
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
