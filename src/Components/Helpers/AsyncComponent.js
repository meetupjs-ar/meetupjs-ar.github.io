import Loadable from 'react-loadable';
import Loading from '../Loading/Loading';

const AsyncComponent = (props) =>
  Loadable({
    loading: Loading,
    ...props
  });

export default AsyncComponent;
