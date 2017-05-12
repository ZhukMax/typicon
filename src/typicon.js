import React from 'react';
import 'typicons.font/src/font/typicons.css';

class Typicon extends React.Component {
  render() {
    let name = this.props.name,
        nameOfClass;

    nameOfClass = "typcn typcn-" + name;
    return (
      <span class={ nameOfClass }></span>
    );
  }
}
export default Typicon;
