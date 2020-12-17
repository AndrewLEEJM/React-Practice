import { Component } from 'react';
// import MyComponent from './MyComponent';
import Event from './Event';
import Validation from './Validation';
import './App.css';

class App extends Component {
  render() {
    const name = 'React Test';
    return (
      <div className="react">
        {name}
        {/* 컴포넌트 태그 사이에 들어가는 것은 children prop가 된다. */}
        {/* <MyComponent favoriteNum={123}>Children이다</MyComponent> */}
        <Event />
        <Validation />
      </div>
    );
  }
}

export default App;
