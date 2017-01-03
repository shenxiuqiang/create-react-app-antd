import React from 'react';
import { Layout } from 'antd';
import Menus from './Menus';
import Tabs from './Tabs';
import './index.css';

const { Header, Content } = Layout;

const App = () =>
  <Layout>
    <Header><Menus /></Header>
    <Content><Tabs /></Content>
  </Layout>;

export default App;
