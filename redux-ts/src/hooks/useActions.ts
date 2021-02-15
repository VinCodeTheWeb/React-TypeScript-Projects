import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchRepositories } from '../redux/Repositories/repositories.actions';

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({ searchRepositories }, dispatch);
};

export { useActions };