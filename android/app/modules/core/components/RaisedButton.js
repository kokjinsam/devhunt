import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const propTypes = {
  mdi: PropTypes.string,
  label: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'navy',
    height: 36,
    overflow: 'hidden',
    paddingLeft: 16,
    paddingRight: 16,
    margin: 8,
    borderRadius: 2,
    elevation: 2,
  },
  icon: {

  },
  label: {
    color: '#ffffff',
  },
});

class RaisedButton extends Component {
  renderIcon() {
    const { mdi } = this.props;
    return (
      <View style={styles.icon}>
        <MaterialIcon name={mdi} size={24} color="blue" />
      </View>
    );
  }
  render() {
    const {
      mdi,
      label,
      ...others,
    } = this.props;

    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('blue')}
        {...others}
      >
        <View style={styles.button}>
          {mdi ? this.renderIcon() : null}
          <Text style={styles.label}>{label}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

RaisedButton.propTypes = propTypes;

export default RaisedButton;
