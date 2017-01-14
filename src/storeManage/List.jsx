import React from 'react';
import { Button, Table, Icon, Row, Col } from 'antd';

class TableEnterLeave extends React.Component {

  constructor(props) {
    super(props);
    this.props.fetchList();
    this.columns = [
      {
        title: '店铺昵称/淘宝旺旺',
        dataIndex: 'storeNickName',
        key: 'storeNickName',
        width: '10%',
      }, {
        title: '店铺名称',
        dataIndex: 'storeName',
        key: 'storeName',
        width: '10%',
      }, {
        title: '店铺地址',
        dataIndex: 'storeAddress',
        key: 'storeAddress',
        width: '10%',
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (text, record) => (
          <a href="asd" onClick={e => this.onDelete(record.key, e)}>
          Delete
          </a>),
      },
    ];

    this.currentPage = 1;
    this.newPage = 1;
  }


  pageChange = (pagination) => {
    this.newPage = pagination.current;
  };

  render() {
    return (<div>
      <Row className="table-operation-bar">
        <Col span={12}>
          <Button
            type="primary"
            onClick={this.onAdd}
          >新增</Button>
          <Button
            type="ghost"
            className="button-second"
            onClick={() => this.props.fetchList({})}
          >
            <Icon type="reload" />
          </Button>
        </Col>
      </Row>
      <Table
        rowKey="id"
        loading={this.props.listLoading}
        columns={this.columns}
        pagination={{ pageSize: 8 }}
        dataSource={this.props.data}
        onChange={this.pageChange}
      />
    </div>);
  }
}


TableEnterLeave.propTypes = {
  fetchList: React.PropTypes.func,
  listLoading: React.PropTypes.bool,
  data: React.PropTypes.array,
};

export default TableEnterLeave;
