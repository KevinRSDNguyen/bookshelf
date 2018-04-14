import axios from 'axios';

export const getBooks = (limit = 10, start = 0, order = 'asc') => {
  const request = axios.get(`/api/books?limit=${limit}&skip=${start}&order=${order}`)
    .then(({data}) => {
      return data;
    });

  return {
    type: 'GET_BOOKS',
    payload: request
  }
};