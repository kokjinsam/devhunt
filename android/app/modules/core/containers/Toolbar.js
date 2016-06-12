import Toolbar from '../components/Toolbar';
import Loading from '../components/Loading';
import ErrorCom from '../components/Error';
import { composeWithRedux, composeAll } from 'react-komposer-plus';
import { useDeps } from 'react-simple-di';

const mapStateToProps = ({ layout }) => ({
  YPos: layout.toolbarYPosition,
});

const mapDepsToProps = (context) => ({
  Actions: context.Actions,
  context: () => context,
});

export default composeAll(
  composeWithRedux(mapStateToProps, Loading, ErrorCom),
  useDeps(mapDepsToProps)
)(Toolbar);
