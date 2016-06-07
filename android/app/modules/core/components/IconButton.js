import React, { PropTypes } from 'react';
import {
  View,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const propTypes = {
  mdi: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 48,
    overflow: 'hidden',
    borderRadius: 24,
  },
});

const IconButton = ({
  mdi,
  ...others,
}) => (
  <TouchableNativeFeedback
    background={TouchableNativeFeedback.Ripple('red')}
    {...others}
  >
    <View style={styles.button}>
      <MaterialIcon name={mdi} size={24} color="#900" />
    </View>
  </TouchableNativeFeedback>
);

IconButton.propTypes = propTypes;

export default IconButton;
