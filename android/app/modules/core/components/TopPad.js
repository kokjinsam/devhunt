import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

const propTypes = {
  children: PropTypes.any.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 56,
  },
});

const TopPad = ({
  children,
}) => (
  <View style={styles.container}>
    {children}
  </View>
);

TopPad.propTypes = propTypes;

export default TopPad;
