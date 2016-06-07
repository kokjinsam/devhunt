import React, { Component, PropTypes } from 'react';
import DefaultDrawerLayout from 'react-native-drawer-layout';
import { DefaultRenderer } from 'react-native-router-flux';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import Toolbar from '../containers/Toolbar';

const propTypes = {
  navigationState: PropTypes.any,
  onNavigate: PropTypes.func,
  Actions: PropTypes.any.isRequired,
};

const styles = StyleSheet.create({
  drawer: {
    alignItems: 'center',
    flex: 1,
  },
});

class DrawerLayout extends Component {
  openDrawer = () => {
    this.drawer.openDrawer();
  }

  renderNavigationView = () => {
    const { Actions } = this.props;

    return (
      <View style={[styles.drawer, { backgroundColor: '#fff' }]}>
        <Text>Hello there!</Text>
        <TouchableHighlight onPress={Actions.signIn}>
          <Text>Sign In Page</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.drawer.closeDrawer()}>
          <Text>Close drawer</Text>
        </TouchableHighlight>
      </View>
    );
  }

  renderToolbar = (currentScene) => {
    const {
      hideNavBar = false,
    } = currentScene;

    if (hideNavBar) {
      return null;
    }

    return (
      <Toolbar
        openDrawer={this.openDrawer}
        currentScene={currentScene}
      />
    );
  }
  render() {
    const {
      navigationState,
      onNavigate,
    } = this.props;

    const { children } = navigationState;
    const state = children[0];
    const index = state.index;
    const currentScene = state.children[index];
    const { disableDrawer = false } = currentScene;
    const drawerLockMode = disableDrawer ? 'locked-closed' : 'unlocked';

    return (
      <DefaultDrawerLayout
        drawerWidth={300}
        drawerLockMode={drawerLockMode}
        ref={(drawer) => (this.drawer = drawer)}
        renderNavigationView={() => this.renderNavigationView()}
      >
        <DefaultRenderer
          navigationState={state}
          key={state.key}
          {...state}
          onNavigate={onNavigate}
        />
        {this.renderToolbar(currentScene)}
      </DefaultDrawerLayout>
    );
  }
}

DrawerLayout.propTypes = propTypes;

export default DrawerLayout;
