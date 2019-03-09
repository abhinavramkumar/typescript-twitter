import {IUser} from '../../types';
import {FIREBASE_LOGIN, FIREBASE_LOGOUT} from '../../constants';

const defaultState: IUser = {
  _id: '',
  createdAt: '',
  updatedAt: '',
  name: '',
  photoURL: '',
  username: '',
  uid: '',
  email: '',
};

export const userReducer = (state = defaultState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case FIREBASE_LOGIN:
      return {
        ...payload.user,
      };

    case FIREBASE_LOGOUT:
      return {
        ...defaultState,
      };
    default:
      return state;
  }
};
