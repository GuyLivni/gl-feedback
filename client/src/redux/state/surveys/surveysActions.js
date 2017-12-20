import types   from './surveysTypes';
import { API } from '../../middlewares/apiMiddleware';

const addSurvey = (payload) => ({
  type: types.ADD_SURVEY,
  payload
});

const removeSurvey = (payload) => ({
  type: types.REMOVE_SURVEY,
  payload
});

const getSurvey = (payload) => ({
  type: types.GET_SURVEYS,
  payload
});

const sortSurvey = (payload) => ({
  type: types.SORT_SURVEYS,
  payload
});

const submitSurvey = (values, history) => ({
  type: API,
  payload: {
    url: '/api/surveys',
    method: 'post',
    body: values,
    success: addSurvey,
    afterHandler: () => history.push('/surveys')
  }
});

const deleteSurvey = id => ({
  type: API,
  payload: {
    url: '/api/surveys',
    method: 'delete',
    params: { id },
    success: removeSurvey
  }
});

const fetchSurveys = () => ({
  type: API,
  payload: {
    url: '/api/surveys',
    method: 'get',
    success: getSurvey
  }
});

export default {
  submitSurvey,
  deleteSurvey,
  fetchSurveys,
  sortSurvey
}