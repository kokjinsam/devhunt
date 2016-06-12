import DrawerLayout from '../components/DrawerLayout';
import Loading from '../components/Loading';
import ErrorCom from '../components/Error';
import { compose, composeAll } from 'react-komposer-plus';
import { useDeps } from 'react-simple-di';

const mapDataToProps = ({ context }, onData) => {
  const { Meteor } = context();

  onData(null, {
    isLoggingIn: Meteor.loggingIn(),
    isLoggedIn: Meteor.userId() !== null,
    currentUser: Meteor.user(),
  });
};

const mapDepsToProps = (context) => ({
  Actions: context.Actions,
  context: () => context,
});

export default composeAll(
  compose(mapDataToProps, Loading, ErrorCom),
  useDeps(mapDepsToProps)
)(DrawerLayout);
