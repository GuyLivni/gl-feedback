import { reducer as reduxForm }    from 'redux-form';
import authReducer                 from './authReducer';
import surveysReducer              from './surveysReducer';

export default {
  surveys: surveysReducer,
  form: reduxForm,
  auth: authReducer
};
