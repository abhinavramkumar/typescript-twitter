import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {hastagsReducer} from './reducers/hashtags';
import {tweetsReducer} from './reducers/tweets';
import {rootSaga} from './sagas';
import {userReducer} from './reducers/users';

const sagaMiddleware = createSagaMiddleware();

// then run the saga

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    hashtags: hastagsReducer,
    tweets: tweetsReducer,
    user: userReducer,
  }),
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
