import PropTypes from 'prop-types';
import { Component } from 'react';

class MyComponent extends Component {
  static defaultProps = {
    name: '기본이름',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNum: PropTypes.number.isRequired,
  };
  render() {
    const { name, children, favoriteNum } = this.props;
    return (
      <div>
        New Component this props = {name} <br />
        Childred 값 = {children}
        <br />
        필수 숫자야 들어와라 = {favoriteNum}
      </div>
    );
  }
}

/* 
MyComponent.defaultProps = {
  name: '기본 하위',
};

//props 검증
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNum: PropTypes.number.isRequired,
};
 */
export default MyComponent;
