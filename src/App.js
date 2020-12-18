import { Component } from 'react';
// import MyComponent from './MyComponent';
import Info from './hooks/InfoReducer';
import UseReducerCounter from './hooks/UseReducerCounter';
import Average from './hooks/AverageUseCallback';

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
        <Info />
        <UseReducerCounter />
        <Average />
      </div>
    );
  }
}

export default App;
