import Meteor from 'react-native-meteor';
import { AppRegistry } from 'react-native';
import {
  Router,
  Scene,
  Actions,
} from 'react-native-router-flux';

// Meteor.connect('ws://localhost:3000/websocket');

export default function () {
  return {
    Meteor,
    Router,
    Scene,
    Actions,
    AppRegistry,
  };
}
