import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from './action';
import List from './List';
import Edit from './Edit';

const Main = ({ data: { listLoading, data }, fetchList }) =>
  <div>
    <List
      listLoading={listLoading}
      data={data}
      fetchList={fetchList}
    />
    <Edit />
  </div>;

Main.propTypes = {
  data: React.PropTypes.object,
  fetchList: React.PropTypes.func,
};

const mapStateToProps = state => ({
  data: state.storeManageReducer,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps,
  mapDispatchToProps)(Main);

