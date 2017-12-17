import * as types from './types';

export const signinUser = (payload) => ({
  type: types.USER_FETCH,
  payload
});

export const signoutUser = () => ({
  type: types.USER_SIGNOUT
});

export const addSurvey = (payload) => ({
  type: types.SURVEY_ADD,
  payload
});

export const removeSurvey = (payload) => ({
  type: types.SURVEY_REMOVE,
  payload
});

export const getSurvey = (payload) => ({
  type: types.SURVEY_GET,
  payload
});

export const sortSurvey = (payload) => ({
  type: types.SURVEY_SORT,
  payload
});

export const fetchUser = () => ({
  type: types.API,
  payload: {
    url: '/api/current_user',
    method: 'get',
    success: signinUser
  }
});

export const logoutUser = () => ({
  type: types.API,
  payload: {
    url: '/api/logout',
    method: 'get',
    success: signoutUser
  }
});

export const handleToken = token => ({
  type: types.API,
  payload: {
    url: '/api/stripe',
    method: 'post',
    body: token,
    success: signinUser
  }
});

export const submitSurvey = (values, history) => ({
  type: types.API,
  payload: {
    url: '/api/surveys',
    method: 'post',
    body: values,
    success: addSurvey,
    afterHandler: () => history.push('/surveys')
  }
});

export const deleteSurvey = id => ({
  type: types.API,
  payload: {
    url: '/api/surveys',
    method: 'delete',
    params: { id },
    success: removeSurvey
  }
});

export const fetchSurveys = () => ({
  type: types.API,
  payload: {
    url: '/api/surveys',
    method: 'get',
    success: getSurvey
  }
});
