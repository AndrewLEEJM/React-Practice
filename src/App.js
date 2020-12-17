import { Component } from 'react';
// import MyComponent from './MyComponent';
import Event from './Event';
import Validation from './Validation';
import LifeCycle from './LifeCycle';

import './App.css';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({ color: getRandomColor() });
  };

  render() {
    const name = 'React Test';
    return (
      <div className="react">
        {name}
        {/* 컴포넌트 태그 사이에 들어가는 것은 children prop가 된다. */}
        {/* <MyComponent favoriteNum={123}>Children이다</MyComponent> */}
        <Event />
        <Validation />
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycle color={this.state.color} />
      </div>
    );
  }
}

export default App;
