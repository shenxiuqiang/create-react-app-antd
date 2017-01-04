import React, { Component } from 'react';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class MainTab extends Component {

  constructor(props) {
    super(props);
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
    this.newTabIndex = 0;
  }

  render() {
    return (
      <Tabs
        hideAdd
        onChange={this.onChange}
        activeKey={this.state.activeKey}
        type="editable-card"
        onEdit={this.onEdit}
      >
        {this.state.panes.map(pane =>
          <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
      </Tabs>
    );
  }
}

export default MainTab;
