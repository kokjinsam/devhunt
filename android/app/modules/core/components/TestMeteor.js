import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

const TestMeteor = ({
  meteorCall,
  testRedux,
  login,
}) => (
  <View>
    <TouchableHighlight onPress={meteorCall}>
      <Text>TestMeteor</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={testRedux}>
      <Text>TestRedux</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={login}>
      <Text>Login</Text>
    </TouchableHighlight>
  </View>
);

export default TestMeteor;
