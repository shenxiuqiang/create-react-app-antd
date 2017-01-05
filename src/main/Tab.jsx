import React from 'react';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

const MainTab = ({
onChange,
activeKey,
onEdit,
panes }) =>
  <Tabs
    hideAdd
    onChange={onChange}
    activeKey={activeKey}
    type={panes.length > 1 ? 'editable-card' : 'card'}
    onEdit={onEdit}
  >
    {panes.map((pane) => {
      const Comp = pane.component;
      return <TabPane tab={pane.title} key={pane.key}><Comp /></TabPane>;
    })}
  </Tabs>;

MainTab.propTypes = {
  onChange: React.PropTypes.func,
  activeKey: React.PropTypes.string,
  onEdit: React.PropTypes.func,
  panes: React.PropTypes.array,
};

export default MainTab;
