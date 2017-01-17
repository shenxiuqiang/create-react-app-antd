export const storeType = [
  {
    type: 'taobao',
    name: '淘宝',
  },
  {
    type: 'tmall',
    name: '天猫',
  },
  {
    type: 'alibaba',
    name: '阿里巴巴',
  },
  {
    type: 'jd',
    name: '京东',
  }, {
    type: 'suning',
    name: '苏宁',
  }, {
    type: 'yhd',
    name: '一号店',
  }, {
    type: 'dangdang',
    name: '当当',
  }, {
    type: 'youzan',
    name: '有赞',
  },
  {
    type: 'beibei',
    name: '贝贝网',
  },
  {
    type: 'mogujie',
    name: '蘑菇街',
  },
  {
    type: 'offline',
    name: '线下店铺',
  },
];

export function getStoreType(type) {
  let name = '';
  storeType.forEach((value) => {
    if (type === value.type) {
      name = value.name;
    }
  });
  return name;
}
