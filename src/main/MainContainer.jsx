import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from './action';
import Menu from './Menu';
import Tab from './Tab';
import './index.css';

const Main = ({ data, onMenuClick, onTabChange, onTabEdit }) =>
  <div>
    <Menu
      current={data.currentMenu}
      onClick={onMenuClick}
    />
    <Tab
      onChange={onTabChange}
      activeKey={data.currentTab}
      onEdit={onTabEdit}
      panes={data.panes}
    />
  </div>;

Main.propTypes = {
  data: React.PropTypes.object,
  onMenuClick: React.PropTypes.func,
  onTabChange: React.PropTypes.func,
  onTabEdit: React.PropTypes.func,
};

const mapStateToProps = state => ({
  data: state.mainReducer,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps,
  mapDispatchToProps)(Main);

