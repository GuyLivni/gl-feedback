import { API } from '../actions/types';
import axios   from 'axios';

const api = ({ dispatch, getState }) => next => async (action) => {

  if (action.type !== API) {
    return next(action);
  }

  const { url, method, success, body, params, extra } = action.payload;

  try {
    const { data } = await axios({method, url, data: body, params});
    dispatch(success(data, extra));
  } catch (error) {
    console.log("Error occurred: ", error)
  }
};

export default api;