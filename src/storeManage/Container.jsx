import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from './action';
import List from './List';
import Edit from './Edit';

const Container = ({
  fetchList,
  fetchEdit,
  hide,
  listState: { listLoading, data },
  editState: { visible, edit } }) =>
    <div>
      <List
        listLoading={listLoading}
        data={data}
        fetchList={fetchList}
        fetchEdit={fetchEdit}
      />
      <Edit
        visible={visible}
        edit={edit}
        hide={hide}
      />
    </div>;

Container.propTypes = {
  listState: React.PropTypes.object,
  editState: React.PropTypes.object,
  fetchList: React.PropTypes.func,
  fetchEdit: React.PropTypes.func,
  hide: React.PropTypes.func,
};

const mapStateToProps = state => ({
  listState: state.storeManageReducer.listReducer,
  editState: state.storeManageReducer.editReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(action, dispatch);

export default connect(mapStateToProps,
  mapDispatchToProps)(Container);

