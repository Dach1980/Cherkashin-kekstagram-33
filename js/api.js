import { BASE_URL } from './constants.js';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/'
};

const load = async (endpoint, options, errorMessage) => await fetch(`${BASE_URL}${endpoint}`, {
  ...options
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(errorMessage || 'Network response was not ok');
    }
    return response.json();
  });

const getData = () => load(Route.GET_DATA, {}, 'Ошибка загрузки данных');

const sendData = (body) => load(Route.SEND_DATA, { body, method: 'POST' }, 'Данные не валидны');



export { getData, sendData };
