import { combineReducers } from 'redux';
import { repositoriesReducer } from './Repositories/repositories.reducer';

export const rootReducer = combineReducers({
  repositories: repositoriesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
