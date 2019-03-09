import {IHashtag} from '../../types';
import {LOAD_HASHTAGS} from '../../constants';

const defaultState: Array<IHashtag> = [];

export const hastagsReducer = (state = defaultState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case LOAD_HASHTAGS:
      return [...payload.hashtags];

    default:
      return state;
  }
};
