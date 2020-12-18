import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    number: 0,
  };
  /* constructor(props) {
    super(props);
    //state의 초기값 설정
    this.state = {
      number: 0,
    };
  } */
  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              //setState가 끝난 후 특정 작업이 실행되게 할 때는 콜백을 사용.
              this.setState((prevState) => {
                return { number: prevState.number + 1 };
              });
            });
            //setState를 사용할 때 화살표 함수에서 바로 객체를 반환하도록 할 수 있다.
            this.setState((prevState) => {
              return { number: prevState.number + 1 };
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
