import SignInPage from '../components/SignInPage';
import { composeAll } from 'react-komposer-plus';
import { useDeps } from 'react-simple-di';

const mapDepsToProps = (context) => ({
  Actions: context.Actions,
  context: () => context,
});

export default composeAll(
  useDeps(mapDepsToProps)
)(SignInPage);
