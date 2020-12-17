import { Component } from 'react';
import MyComponent from './MyComponent';
import './App.css';

class App extends Component {
  render() {
    const name = 'React Test';
    return (
      <div className="react">
        {name}
        <MyComponent favoriteNum={123}>Children이다</MyComponent>
      </div>
    );
  }
}

export default App;
