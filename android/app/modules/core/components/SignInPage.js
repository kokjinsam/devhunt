import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import RaisedButton from './RaisedButton';

const propTypes = {
  Actions: PropTypes.any.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  btnContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

class SignInPage extends Component {
  render() {
    const { Actions } = this.props;

    return (
      <View style={styles.container}>
        <Text>Sign In</Text>
        <View>
          <TextInput
            placeholder="Email"
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          />
        </View>
        <View style={styles.btnContainer}>
          <RaisedButton onPress={Actions.main} label="Go back" />
        </View>
      </View>
    );
  }
}

SignInPage.propTypes = propTypes;

export default SignInPage;
