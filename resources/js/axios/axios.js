import axios from 'axios'

axios.defaults.headers.get.Accept = 'application/json'
axios.defaults.headers.post.Accept = 'application/json'
axios.defaults.headers.put.Accept = 'application/json'
axios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});
export default axios
