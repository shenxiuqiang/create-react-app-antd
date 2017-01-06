import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from './action';
import List from './List';

const Main = ({ data: { listLoading, data }, fetchList }) =>
  <div>
    <List
      listLoading={listLoading}
      data={data}
      fetchList={fetchList}
    />
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

