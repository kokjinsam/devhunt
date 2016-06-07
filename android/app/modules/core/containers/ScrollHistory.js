import ScrollHistory from '../components/ScrollHistory';
import { composeWithRedux, composeAll } from 'react-komposer-plus';
import { useDeps } from 'react-simple-di';

const mapStateToProps = ({ layout }) => ({
  toolbarYPosition: layout.toolbarYPosition,
});

const mapDepsToProps = (context, actions) => ({
  updateToolbarPosition: actions.layout.updateToolbarPosition,
  context: () => context,
});

export default composeAll(
  composeWithRedux(mapStateToProps),
  useDeps(mapDepsToProps)
)(ScrollHistory);
