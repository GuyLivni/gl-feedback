import { API } from '../actions/types';
import axios   from 'axios';

const api = ({ dispatch, getState }) => next => async (action) => {

  if (action.type !== API) {
    return next(action);
  }

  const {
    url,
    method,
    success,
    body,
    params,
    beforeHandler,
    afterHandler
  } = action.payload;

  try {
    if (beforeHandler && typeof beforeHandler === "function") {
      beforeHandler();
    }

    const { data } = await axios({method, url, data: body, params});
    dispatch(success(data));

    if (afterHandler && typeof afterHandler === "function") {
      afterHandler();
    }
  } catch (error) {
    console.log("Error occurred: ", error)
  }
};

export default api;