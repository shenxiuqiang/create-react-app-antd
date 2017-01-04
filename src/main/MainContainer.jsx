import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from './action';
import { reduceData } from './reducer';
import Menu from './Menu';
import Tab from './Tab';
import './index.css';

const Main = props =>
  <div>
    <Menu
      current={props.data.current}
      onClick={props.onMenuClick}
    />
    <Tab />
  </div>;

Main.propTypes = {
  data: React.PropTypes.object,
  onMenuClick: React.PropTypes.func,
};

const mapStateToProps = state => ({
  data: reduceData(state.mainReducer),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps,
  mapDispatchToProps)(Main);

