import axios from 'axios';

export const getBooks = (limit = 10, start = 0, order = 'asc', list = '') => {
  const request = axios.get(`/api/books?limit=${limit}&skip=${start}&order=${order}`)
    .then(({ data }) => {
      if (list) {
        return [...list,...data]
      } else {
        return data;
      }
    });

  return {
    type: 'GET_BOOKS',
    payload: request
  }
};

export const getBookWithReviewer = (id) => {
  const request = axios.get(`/api/getBook?id=${id}`);

  return (dispatch) => {
    request.then(({data}) => {
      let book = data;
      axios.get(`/api/getReviewer?id=${book.ownerId}`)
      .then(({data}) => {
        const response = {
          book,
          reviewer: data
        };
        dispatch({
          type: "GET_BOOK_W_REVIEWER",
          payload: response
        });
      });
    });
  };
};