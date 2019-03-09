import {ITweet} from '../../types';
import {
  CREATE_TWEET,
  DELETE_TWEET,
  EDIT_TWEET,
  LOAD_INITIAL_TWEETS,
  LOAD_MORE_TWEETS,
} from '../../constants';

const defaultState: Array<ITweet> = [];

export const tweetsReducer = (state = defaultState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case CREATE_TWEET:
      return [payload.tweet, ...state];

    case DELETE_TWEET:
      return state.filter(tweet => tweet._id !== payload.id);

    case LOAD_INITIAL_TWEETS:
      return [...payload.tweets];

    case LOAD_MORE_TWEETS:
      return [...payload.tweets, ...state];
    default:
      return state;
  }
};
