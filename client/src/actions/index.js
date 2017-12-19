import * as TYPES from './types';

export const signinUser = (payload) => ({
  type: TYPES.USER_FETCH,
  payload
});

export const signoutUser = () => ({
  type: TYPES.USER_SIGNOUT
});

export const addSurvey = (payload) => ({
  type: TYPES.SURVEY_ADD,
  payload
});

export const removeSurvey = (payload) => ({
  type: TYPES.SURVEY_REMOVE,
  payload
});

export const getSurvey = (payload) => ({
  type: TYPES.SURVEY_GET,
  payload
});

export const sortSurvey = (payload) => ({
  type: TYPES.SURVEY_SORT,
  payload
});

export const fetchUser = () => ({
  type: TYPES.API,
  payload: {
    url: '/api/me',
    method: 'get',
    success: signinUser
  }
});

export const logoutUser = () => ({
  type: TYPES.API,
  payload: {
    url: '/api/logout',
    method: 'get',
    success: signoutUser
  }
});

export const handleToken = token => ({
  type: TYPES.API,
  payload: {
    url: '/api/stripe',
    method: 'post',
    body: token,
    success: signinUser
  }
});

export const submitSurvey = (values, history) => ({
  type: TYPES.API,
  payload: {
    url: '/api/surveys',
    method: 'post',
    body: values,
    success: addSurvey,
    afterHandler: () => history.push('/surveys')
  }
});

export const deleteSurvey = id => ({
  type: TYPES.API,
  payload: {
    url: '/api/surveys',
    method: 'delete',
    params: { id },
    success: removeSurvey
  }
});

export const fetchSurveys = () => ({
  type: TYPES.API,
  payload: {
    url: '/api/surveys',
    method: 'get',
    success: getSurvey
  }
});
