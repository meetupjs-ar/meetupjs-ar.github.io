import Loadable from 'react-loadable';
import Loading from './Loading';

const AsyncComponent = (props) =>
  Loadable({
    loading: Loading,
    ...props
  });

export default AsyncComponent;
