import Meteor from 'react-native-meteor';
import { AppRegistry } from 'react-native';
import {
  Router,
  Scene,
  Actions,
  TabBar,
  Modal,
  Schema,
  Reducer,
} from 'react-native-router-flux';
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

export default function ({ reducers }) {
  const reducer = combineReducers({
    ...reducers,
  });
  const logger = createLogger();

  // put all redux middlewares here
  const middlewares = [
    thunk,
    logger,
  ];

  const Store = createStore(reducer, applyMiddleware(...middlewares));

  return {
    Meteor,
    Router,
    Scene,
    Actions,
    AppRegistry,
    TabBar,
    Modal,
    Schema,
    Reducer,
    Store,
    dispatch: Store.dispatch,
  };
}
