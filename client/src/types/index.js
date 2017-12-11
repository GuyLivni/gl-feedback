import {
  func, object, bool, shape, string, number
} from 'prop-types';

export const headerType = {
  logoutUser: func.isRequired,
  history: object.isRequired,
  isAuthenticated: bool.isRequired,
  user: shape({
    name: string,
    photo: string,
    credits: number
  })
};