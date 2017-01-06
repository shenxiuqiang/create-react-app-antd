import React from 'react';
import { Button, Table, Icon, Row, Col } from 'antd';

import './index.css';

class TableEnterLeave extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'table-store-manage',
  };

  constructor(props) {
    super(props);
    this.props.fetchList();
    this.columns = [
      {
        title: '店铺昵称/淘宝旺旺',
        dataIndex: 'storeNickName',
        key: 'storeNickName',
      }, {
        title: '店铺名称',
        dataIndex: 'storeName',
        key: 'storeName',
      }, {
        title: '店铺地址',
        dataIndex: 'storeAddress',
        key: 'storeAddress',
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (text, record) => (
          <a href="asd" className={`${this.props.className}-delete`} onClick={e => this.onDelete(record.key, e)}>
          Delete
          </a>),
      },
    ];
    this.enterAnim = [
      { opacity: 0, x: 30, backgroundColor: '#fffeee', duration: 0 },
      {
        height: 0,
        duration: 200,
        type: 'from',
        delay: 250,
        ease: 'easeOutQuad',
        onComplete: this.onEnd,
      },
      { opacity: 1, x: 0, duration: 250, ease: 'easeOutQuad' },
      { delay: 1000, backgroundColor: '#fff' },
    ];
    this.leaveAnim = [
      { duration: 250, opacity: 0 },
      { height: 0, duration: 200, ease: 'easeOutQuad' },
    ];
    this.currentPage = 1;
    this.newPage = 1;
  }

  onEnd = (e) => {
    const dom = e.target;
    dom.style.height = 'auto';
  }

  onAdd = () => {
    const data = this.state.data;
    const i = Math.round(Math.random() * (this.data.length - 1));
    data.unshift({
      key: Date.now(),
      name: this.data[i].name,
      age: this.data[i].age,
      address: this.data[i].address,
    });
    this.setState({
      data,
    });
  };

  onDelete = (key, e) => {
    e.preventDefault();
    const data = this.state.data.filter(item => item.key !== key);
    this.setState({ data });
  }

  pageChange = (pagination) => {
    this.newPage = pagination.current;
  };

  render() {
    return (<div>
      <Row style={{ marginBottom: 16 }}>
        <Col span={12}>

          <Button type="primary" onClick={this.onAdd}>Add</Button>
          <Button type="ghost" style={{ marginLeft: 8 }} onClick={() => this.props.fetchList({})}>
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
