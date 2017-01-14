const menus = [{
  title: '店铺管理',
  key: 'storeList',
  component: require('../storeManage/Container').default,
},
{
  title: '订单管理',
  key: 'sellOrders',
  component: require('../orderManage/Container').default,
},
{
  title: '快递单模板',
  key: 'printExpressTemplate',
  on: true,
  component: require('../orderManage/Container').default,
},
{
  title: '其他打印模板',
  key: 'printTemplate',
  on: true,
  component: require('../orderManage/Container').default,
},
{
  title: '物流管理',
  key: 'logisticsManage',
  component: require('../orderManage/Container').default,
},
];

export default menus;
