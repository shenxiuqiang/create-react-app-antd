import React from 'react';
import { Button, Table, Icon, Row, Col } from 'antd';
import moment from 'moment';
import { getStoreType } from '../util/getStoreType.js';

class List extends React.Component {

  constructor(props) {
    super(props);
    this.props.fetchList();
    this.columns = [
      {
        title: '店铺类型',
        dataIndex: 'storeType',
        key: 'storeType',
        width: '7%',
        render(text, record) {
          return <span>{getStoreType(record.storeType)}</span>;
        },
      }, {
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
      }, {
        title: '联系人',
        dataIndex: 'storeContact',
        key: 'storeContact',
        width: '7%',
      }, {
        title: '联系电话',
        dataIndex: 'storeContactTel',
        key: 'storeContactTel',
        width: '7%',
      }, {
        title: '手机',
        dataIndex: 'storeContactMobile',
        key: 'storeContactMobile',
        width: '7%',
      }, {
        title: '店铺创建时间',
        dataIndex: 'addTime',
        key: 'addTime',
        width: '10%',
        sorter: true,
        render: ((text, record) => <span>{moment(record.addTime).format('YYYY-MM-DD')}</span>),
      }, {
        title: '授权到期时间',
        dataIndex: 'tokenExpiresDate',
        key: 'tokenExpiresDate',
        width: '10%',
        sorter: true,
        render: ((text, record) => <span>{record.tokenExpiresDate ? moment(record.tokenExpiresDate).format('YYYY-MM-DD') : null}</span>),
      }, {
        title: '店铺佣金（%）',
        dataIndex: 'commision',
        key: 'commision',
        width: '7%',
      }, {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (
          <div>
            <a
              href="javascript:void(0)"
              onClick={() => this.props.fetchEdit(record.id)}
            >
          编辑
          </a>
          </div>
          ),
      },
    ];

    this.currentPage = 1;
    this.newPage = 1;
  }

  pageChange = (pagination) => {
    this.newPage = pagination.current;
  };

  render() {
    return (
      <div>
        <Row className="table-operation-bar">
          <Col span={12}>
            <Button
              type="ghost"
              onClick={() => this.props.fetchEdit(-1)}
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

List.propTypes = {
  fetchList: React.PropTypes.func.isRequired,
  listLoading: React.PropTypes.bool,
  data: React.PropTypes.array,
  fetchEdit: React.PropTypes.func.isRequired,
};

export default List;
