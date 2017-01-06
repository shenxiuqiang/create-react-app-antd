import React from 'react';

import './index.css';

class TableEnterLeave extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'table-enter-leave-demo',
  };

  constructor(props) {
    super(props);

    this.currentPage = 1;
  }

  render() {
    return (<div>123
    </div>);
  }
}

export default TableEnterLeave;
