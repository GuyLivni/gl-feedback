import axios                        from 'axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const API = 'API';

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

  dispatch(showLoading());

  try {
    if (beforeHandler && typeof beforeHandler === "function") {
      beforeHandler();
    }

    const { data } = await axios({method, url, data: body, params});
    dispatch(hideLoading());
    dispatch(success(data));

    if (afterHandler && typeof afterHandler === "function") {
      afterHandler();
    }
  } catch (error) {
    dispatch(hideLoading());
    console.log("Error occurred: ", error)
  }
};

export default api;