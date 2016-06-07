import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const propTypes = {
  goToPage: PropTypes.func,
  activeTab: PropTypes.number,
  tabs: PropTypes.array,
  backgroundColor: PropTypes.string,
  activeTextColor: PropTypes.string,
  inactiveTextColor: PropTypes.string,
  textStyle: Text.propTypes.style,
  tabStyle: View.propTypes.style,
  style: View.propTypes.style,
  containerWidth: PropTypes.number,
};

const defaultProps = {
  activeTextColor: 'navy',
  inactiveTextColor: 'black',
  underlineColor: 'navy',
  backgroundColor: '#ffffff',
  underlineHeight: 4,
};

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerTab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-around',
    elevation: 8,
  },
});

class BottomNav extends Component {
  cleanName(name) {
    const separator = name.indexOf('/');

    if (separator > -1) {
      return {
        label: name.slice(0, separator),
        icon: name.slice(separator + 1, name.length),
      };
    }

    return name;
  }

  renderTabLabel(label, textColor, fontWeight, textStyle) {
    return (
      <Text style={[{ color: textColor, fontWeight }, textStyle]}>
        {label}
      </Text>
    );
  }

  renderTabOption(name, page) {
    const isTabActive = this.props.activeTab === page;
    const {
      activeTextColor,
      inactiveTextColor,
      textStyle,
    } = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? 'bold' : 'normal';

    const {
      label,
      icon,
    } = this.cleanName(name);

    return (
      <TouchableNativeFeedback
        key={name}
        onPress={() => this.props.goToPage(page)}
        background={TouchableNativeFeedback.Ripple('red')}
      >
        <View style={[styles.tab, this.props.tabStyle]}>
          <MaterialIcon name={icon} size={24} color="#900" />
          {isTabActive ? this.renderTabLabel(label, textColor, fontWeight, textStyle) : null}
        </View>
      </TouchableNativeFeedback>
    );
  }

  render() {
    const {
      backgroundColor,
      tabs,
    } = this.props;

    console.log(tabs);

    return (
      <View style={[styles.tabs, { backgroundColor }, this.props.style]}>
        {tabs.map((tab, i) => this.renderTabOption(tab, i))}
      </View>
    );
  }
}

BottomNav.propTypes = propTypes;
BottomNav.defaultProps = defaultProps;

export default BottomNav;
