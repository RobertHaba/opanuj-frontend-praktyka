import { customAxios } from './lib/axios';
import { proxyFetch } from './utils/fetch';

console.log('Proxy Fetch - pending');
const res = await proxyFetch('/api/data/articles?timeout=1000');
console.log(res);

console.log('Custom Axios - pending');
const {
  data: { articles },
} = await customAxios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = articles[0].content;
