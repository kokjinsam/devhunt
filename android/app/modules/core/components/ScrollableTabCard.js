import React, { PropTypes } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';

const propTypes = {
  children: PropTypes.any.isRequired,
};

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

const ScrollableTabCard = ({
  children,
}) => (
  <ScrollView style={styles.tabView}>
    <View style={styles.card}>
      {children}
    </View>
  </ScrollView>
);

ScrollableTabCard.propTypes = propTypes;

export default ScrollableTabCard;
