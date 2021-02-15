import { combineReducers } from 'redux';
import { repositoriesReducer } from './Repositories/repositories.reducer';

export default combineReducers({
  repositories: repositoriesReducer,
});
