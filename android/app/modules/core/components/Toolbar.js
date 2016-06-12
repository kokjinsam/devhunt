import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import IconButton from './IconButton';

const propTypes = {
  openDrawer: PropTypes.func.isRequired,
  Actions: PropTypes.any.isRequired,
  currentScene: PropTypes.any.isRequired,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    top: 0,
    right: 0,
    left: 0,
    height: 56,
    backgroundColor: '#ffffff',
    elevation: 4,
  },
  segment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fill: {
    flex: 1,
  },
  logo: {
    fontSize: 20,
  },
});

class Toolbar extends Component {
  renderMenuBtn = () => {
    const { openDrawer } = this.props;

    return (
      <View style={styles.segment}>
        <IconButton
          mdi="menu"
          onPress={openDrawer}
        />
      </View>
    );
  }

  renderBackBtn = () => {
    const { Actions } = this.props;

    return (
      <View style={styles.segment}>
        <IconButton
          mdi="keyboard-backspace"
          onPress={Actions.pop}
        />
      </View>
    );
  }

  renderLogo = () => (<Text style={styles.logo}>DevHunt</Text>)

  renderTitle = () => {
    const { currentScene } = this.props;
    const Title = (
      <Text style={styles.logo}>{currentScene.title}</Text>
    );

    return currentScene.title ? Title : null;
  }

  renderAddBtn = () => {
    const { Actions } = this.props;

    return (
      <View style={styles.segment}>
        <IconButton mdi="add" onPress={Actions.addEntry} />
      </View>
    );
  }

  render() {
    const {
      currentScene,
    } = this.props;

    const {
      name,
    } = currentScene;

    const isMain = () => (name === 'main');

    return (
      <View style={[styles.container]}>
        {isMain() ? this.renderMenuBtn() : this.renderBackBtn()}
        <View style={[styles.segment, styles.fill]}>
          {isMain() ? this.renderLogo() : this.renderTitle()}
        </View>
        {isMain() ? this.renderAddBtn() : null}
      </View>
    );
  }
}

Toolbar.propTypes = propTypes;

export default Toolbar;
