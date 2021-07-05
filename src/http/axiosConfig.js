import axios from 'axios';

axios.interceptors.response.use(
  response => (response && response.data ? response.data : response),
  error => Promise.reject(error),
);

export function httpGet() {
  return axios.get.apply(this, arguments);
}

export function httpPut() {
  return axios.put.apply(this, arguments);
}

export function httpPost() {
  return axios.post.apply(this, arguments);
}

export function httpDelete() {
  return axios.delete.apply(this, arguments);
}
