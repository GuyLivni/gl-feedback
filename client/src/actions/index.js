import {SET_USER, SET_SURVEYS, DELETE_SURVEY, API} from './types';

export const fetchUser = () => ({
  type: API,
  payload: {
    url: '/api/current_user',
    method: 'get',
    success: payload => ({
      type: SET_USER,
      payload
    })
  }
});

export const handleToken = token => ({
  type: API,
  payload: {
    url: '/api/stripe',
    method: 'post',
    body: token,
    success: payload => ({
      type: SET_USER,
      payload
    })
  }
});

export const submitSurvey = values => ({
  type: API,
  payload: {
    url: '/api/surveys',
    method: 'post',
    body: values,
    success: payload => ({
      type: SET_USER,
      payload
    })
  }
});

export const deleteSurvey = id => ({
  type: API,
  payload: {
    url: '/api/surveys',
    method: 'delete',
    params: { id },
    success: payload => ({
      type: DELETE_SURVEY,
      payload
    })
  }
});

export const fetchSurveys = () => ({
  type: API,
  payload: {
    url: '/api/surveys',
    method: 'get',
    success: payload => ({
      type: SET_SURVEYS,
      payload
    })
  }
});
