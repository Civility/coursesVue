import axios from 'axios';

// const token = getToken()
// const token = 'Civil' // токен для ограничения входа в бд

export default axios.create({
  baseURL: 'http://localhost:3002',
  // baseURL: 'http://testsite.utsrus.com/vuecli/db/',
  // baseURL: 'http://vuecli/db/',

  timeout: 3000,
  // headers: {
  // Authorization: 'Civil ${token}' // необходимо создать регистрацию
  // Authorization: '${token}'
  // }
});
