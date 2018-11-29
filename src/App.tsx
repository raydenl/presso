import * as React from 'react';
import './App.css';
import Update from './Update';
import Status from './Status';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const myStore = {

}

const store = createStore(myStore)

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Update></Update>
        <Status></Status>
      </div>
    );
  }
}

export default App;
