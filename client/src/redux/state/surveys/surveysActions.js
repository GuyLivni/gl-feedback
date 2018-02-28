import { surveysTypes } from "./";

const sortSurvey = payload => ({
  type: surveysTypes.SORT_SURVEYS,
  payload
});

const submitSurvey = (values, history) => ({
  type: surveysTypes.ADD_SURVEY,
  request: {
    method: "post",
    url: "/api/surveys",
    data: values
  },
  meta: {
    onSuccess: () => history.push("/surveys")
  }
});

const deleteSurvey = id => ({
  type: surveysTypes.REMOVE_SURVEY,
  request: {
    method: "delete",
    url: "/api/surveys",
    params: id
  }
});

const fetchSurveys = () => ({
  type: surveysTypes.GET_SURVEYS,
  request: {
    method: "get",
    url: "/api/surveys"
  }
});

export { submitSurvey, deleteSurvey, fetchSurveys, sortSurvey };
