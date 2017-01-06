import reqwest from 'reqwest';

const server = '//localhost';

export default (url, para) => reqwest({
  url: server + url,
  type: 'json',
  method: 'post',
  data: para,
});
