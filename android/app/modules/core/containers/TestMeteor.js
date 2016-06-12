import TestMeteor from '../components/TestMeteor';
import { composeAll } from 'react-komposer-plus';
import { useDeps } from 'react-simple-di';

const mapDepsToProps = (context, actions) => ({
  meteorCall: actions.test.meteorCall,
  testRedux: actions.layout.updateToolbarPosition,
  login: actions.user.login,
  context: () => context,
});

export default composeAll(
  useDeps(mapDepsToProps)
)(TestMeteor);
