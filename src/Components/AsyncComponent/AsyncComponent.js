import Loadable from 'react-loadable';
import Spinner from '../Spinner/Spinner';

const AsyncComponent = (props) =>
  Loadable({
    loading: Spinner,
    ...props
  });

export default AsyncComponent;
